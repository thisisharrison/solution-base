import React from 'react'
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from '../components/sessions/login_form_container';
import SignUpFormContainer from '../components/sessions/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import NavBarContainer from './navbar/navbar_container';
import HomePageContainer from './homepage/homepage_container'
import PostShowContainer from './posts/post_show_container';
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
      {/* <NoticeContainer /> */}
      <NavBarContainer />
        <Switch>
          <Route exact path='/' component={HomePageContainer} />
          <Route exact path='/posts/:postId' component={PostShowContainer} />
          <Route exact path='/topics/:topicId' component={TopicShowContainer} />
          {/* Moving below to modal */}
          <AuthRoute exact path='/login' component={LoginFormContainer} />
          <AuthRoute exact path='/signup' component={SignUpFormContainer} />
          <Route exact path='/posts/:postId/comment' component={NewCommentFormContainer} />
          <Route exact path='/comments/:commentId' component={EditCommentFormContainer} />
          {/* For testing only */}
          <Route exact path='/profile' component={BookmarkContainer} />
      </Switch>
    </>
  )
}