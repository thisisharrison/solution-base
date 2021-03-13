import React from 'react'
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from '../components/sessions/login_form_container';
import SignUpFormContainer from '../components/sessions/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import NavBarContainer from './navbar/navbar_container';
import HomePage from './homepage/homepage'
import HomePageContainer from './homepage/homepage_container'
import PostShowContainer from './posts/post_show_container';
import NewPostFormContainer from './post_form/new_post_form_container'
import EditPostFormContainer from './post_form/edit_post_form_container'
import NewCommentFormContainer from './comment_form/new_comment_form_container';
import EditCommentFormContainer from './comment_form/edit_comment_form_container';
import TopicShowContainer from './topics/topic_show_container';
import NoticeContainer from './notice/post_notice_container';
import { AuthRoute } from '../util/route_util';
// styleing
import './app.scss'

// For testing only
import BookmarkContainer from './bookmark/bookmark_container';


export default function App() {
  return (
    <>
      {/* <GreetingContainer /> */}
      <NoticeContainer />
      <NavBarContainer />
        <Switch>
          <Route exact path='/' component={HomePageContainer} />
          <AuthRoute exact path='/login' component={LoginFormContainer} />
          <AuthRoute exact path='/signup' component={SignUpFormContainer} />
          <Route exact path='/posts/:postId' component={PostShowContainer} />
          <Route exact path='/topics/:topicId' component={TopicShowContainer} />
          {/* Temporarily before moving to modal */}
          <Route exact path='/new-post' component={NewPostFormContainer} />
          <Route exact path='/posts/:postId/edit' component={EditPostFormContainer} />
          <Route exact path='/posts/:postId/comment' component={NewCommentFormContainer} />
          <Route exact path='/comments/:commentId' component={EditCommentFormContainer} />
          {/* For testing only */}
          <Route exact path='/profile' component={BookmarkContainer} />
      </Switch>
    </>
  )
}

// <Route expact path='/' component={HomePage} />
// <AuthRoute exact path='/signup' component={Session} />
// <ProtectedRoute exact path='/profile' component={Profile} />