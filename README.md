# SolutionBase

SolutionBase is a social platform for users to address global sustainability issues like global warming, plastic free etc. Platform allows user to contribute their ideas/solutions to different topics and problems. Read more about sustainable development goals [here](https://sdgs.un.org/goals).

## Live Site
[SolutionBase](https://solution-base.herokuapp.com/#/)

## Design Documents
[SolutionBase Wiki](https://github.com/thisisharrison/solution-base/wiki)

## Wireframes and Style Guide
[Design](https://xd.adobe.com/view/e36ef263-5a74-4cc8-bf28-64c4375df322-b63d/screen/0bf77316-87de-4bd7-937e-e4ab174aeb69/specs/)
![alt text](https://i.imgur.com/uqfCaug.jpg "Wireframes")

## Site Features

### Sorting
One main feature is users can filter and sort posts in multiple combination. Their preferences are stored so that when they returned to homepage, it is still in sorted order and/or filtered. 

1. We have a slice of state to keep track of sorting and filtering, separated by topic page and homepage.

2. For sorting, we use thunk action `updateSort` to update Redux store, and then, depending on the `key`, either `fetchTopic` or `fetchPosts` using the data object, which becomes the parameter Topic or Post controller receives.

```js 
// frontend/actions/filter_actions.js
export const updateSort = (id, data, key) => dispatch => {
  dispatch(receiveSort(id, data, key));
  if (key === 'topic') {
    return fetchTopic(id, data)(dispatch);
  } else if (key === 'homepage') {
    return fetchPosts(data)(dispatch);
  }
};
```

3. The data object gets evaluated in the Topic or Post controller in `index` and calls Post's class method `sort_filter`. This method checks the sorting type and calls the responsible class methods, which then uses [ActiveRecord](https://guides.rubyonrails.org/active_record_querying.html) to query the database.

```ruby
# app/models/post.rb
def self.sort_filter(sort)
  case sort[:sort]
  when 'most recent'
    self.most_recent(sort[:topic_id], sort[:post_type])
  when 'most comments'
    self.most_commented(sort[:topic_id], sort[:post_type])
  when 'most votes'
    self.most_votes(sort[:topic_id], sort[:post_type])
  end
end
```

4. When posts are received, we also receive a `postOrder` array, which is used to map posts in the sorted order. 

5. Every sort and filter action is stored and updated in Redux store and passed down to a component with `mapStateToProps`. So component dispatches `updateSort` on mount with the latest filter and sorting parameters.


### Nested Comments
To have children comments nested under a parent comment, we use recursion and Javascript object to achieve better time complexity. 

If we have 1000 comments `c1`, we do not want to iteratre all 1000 comments checking if its `c2.parent_comment_id` equals to `c1.id`. This will be 1000 * 1000 comparisons and an O(n^2) algorithm.

We can achieve this with O(n) time, where n is total number of comments.

1. When we receive a post, we receive an array of `all_comments`, which is stored in the comments slice of Redux store. In a selector function that takes in state and the currently viewed post as arguments, we create an object with keys as `parent_comment_id` and values arrays of their children comments. Comments with no parent have `null` as their keys.

```js
// frontend/reducers/selectors.js
export const selectCommentsForPost = ({comments}, post) => {
  // handle cases where there are no comments or we have not fetchPost
  if (!Object.keys(comments).length) return {};
  if (post.commentIds.filter(commentId => !comments[commentId]).length) return {};
  // create map-like object
  let hash = {};
  post.commentIds.map(commentId => comments[commentId])
    .forEach((comment) => {
      let parent = comment.parent_comment_id;
      let children = hash[parent];
      let update;
      if (children) {
        update = { [parent] : [...children, comment] }
      } else {
        update = { [parent] : [comment] }
      }
      hash = Object.assign({}, hash, update);
    })
  return hash;
}
```

2. In the `PostShow` component, we have a `renderComments` method that takes a parent comment ID as an argument. This method lookups the children comments in the hash object created above and map over all the children comments. It makes a recursive call with each child comment ID to get its children comments. We call the function with `null` (comments with no parent) first, which will go through all their children and then their grandchildren and so on.

```js
// frontend/components/posts/post_show.jsx
  function renderComments(id) {
    return (
      <>
        {comments[id].map(comment => (
          <>
            {singleComment(comment)} // returns <CommentIndexItem />
            <ul>
              {comments[comment.id] && <li>{renderComments(comment.id)}</li>}
            </ul>
          </>
        ))}
      </>
    )
  }
  ...
  return (
    ...
    renderComments(null)
    ...
  )
```

## Usage
### Development
1.  **Front end**

    Use the [npm](https://www.npmjs.com/) package manager to install dependencies in root directory.

    ```shell
    npm install
    npm run webpack
    ```

2. **Back end**    

    Install rails dependencies in root directory, setup Postgres database and start development server.

    ```shell
    rails bundle exec install
    # create the database, load the schema, and initialize it with the seed data
    rails db:setup
    rails s
    ```

    You can view the full application on `localhost:3000`.
    

## Built With

Front-end:

* [React](https://reactjs.org/) - Front end framework
* [Redux](https://redux.js.org/) - State management tool used with React
* [jQuery](https://jquery.com/) - DOM Manipulation
* [AJAX](https://api.jquery.com/category/ajax/) - AJAX used for API calls
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Language for site functionality
* [React-Bootstrap](https://react-bootstrap.github.io/) - - Used for advanced styling and design system
* [Material-UI](https://material-ui.com/) - Used for advanced styling
* [Styled-Component](https://styled-components.com/) - Used for custom styling React components
* [CSS3](http://www.css3.info/) - Used in conjunction with Material-UI for styling
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Used for general structure of webpage

Back-end:

* [Ruby](https://www.ruby-lang.org/en/) 
* [Ruby on Rails](https://rubyonrails.org/) 
* [Postgres](https://www.postgresql.org/) 
* [jBuilder](https://github.com/rails/jbuilder)


## Potential Additions/ Unsolved Issues
- Lazy loading / Infinite scrolling
- Profile page 
- Text based search
- Live time update new posts, comments and their vote counts with WebSockets