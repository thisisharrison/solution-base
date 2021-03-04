import React from 'react'
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from '../components/sessions/login_form_container';
import SignUpFormContainer from '../components/sessions/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import HomePage from './homepage/homepage'
import PostShowContainer from './posts/post_show_container';
import PostFormContainer from './post_form/post_form_container'
import TopicShowContainer from './topics/topic_show_container';
import NoticeContainer from './ui/post_notice_container';
import { AuthRoute } from '../util/route_util';
// styleing
import Container from 'react-bootstrap/Container'

// For testing only
import BookmarkContainer from './bookmark/bookmark_container';

export default function App() {
  return (
    <>
      <GreetingContainer />
      <Container>
        <NoticeContainer />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <AuthRoute exact path='/login' component={LoginFormContainer} />
          <AuthRoute exact path='/signup' component={SignUpFormContainer} />
          <Route exact path='/posts/:postId' component={PostShowContainer} />
          <Route exact path='/topics/:topicId' component={TopicShowContainer} />
          {/* Temporarily before moving to modal */}
          <Route exact path='/new-post' component={PostFormContainer} />
          {/* For testing only */}
          <Route exact path='/profile' component={BookmarkContainer} />
        </Switch>
      </Container>
    </>
  )
}

// <Route expact path='/' component={HomePage} />
// <AuthRoute exact path='/signup' component={Session} />
// <ProtectedRoute exact path='/profile' component={Profile} />