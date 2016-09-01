
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import blog from './lib/blog'
import projects from './lib/projects'
import projectsDetail from './lib/projectsDetail'
import Main from './lib/main'

render((
  <Router history={ hashHistory }>
    <Route path="/" component={ main }>
      <Route path="/blog" component={ blog } />
      <Route path="/projects" component={ projects } />
      <Route path="/projectsDetail" component={ projectsDetail } />
    </Route>
  </Router>
), document.getElementById('app'))
