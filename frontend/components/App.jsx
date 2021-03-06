import React from 'react'
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from '../components/sessions/login_form_container';
import SignUpFormContainer from '../components/sessions/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import NavBarContainer from './navbar/navbar_container';
import HomePageContainer from './homepage/homepage_container'
import PostShowContainer from './posts/post_show_container';
import TopicShowContainer from './topics/topic_show_container';
import NoticeContainer from './notice/post_notice_container';
// styleing
import './app.scss'


export default function App() {
  return (
    <>
      <GreetingContainer />
      <NoticeContainer />
      <NavBarContainer />
      <LoginFormContainer />
      <SignUpFormContainer />
        <Switch>
          <Route exact path='/' component={HomePageContainer} />
          <Route exact path='/posts/:postId' component={PostShowContainer} />
          <Route exact path='/topics/:topicId' component={TopicShowContainer} />
      </Switch>
    </>
  )
}