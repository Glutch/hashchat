import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/home/Home'
// import AboutPage from './components/about/AboutPage'
// import CoursesPage from './components/course/CoursesPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    {/*
    <Route path="courses" component={CoursesPage} />
    <Route path="about" component={AboutPage} />
    */}
  </Route>
)