import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from '../../pages/dashboard/dashboard'
import Home from '../../pages/home/home'
import Sharebox from '../../pages/sharebox/sharebox'
import Sharepage from '../../pages/sharepage/sharepage'
import styles from './app.module.css'

function App() {
  const basename =
    process.env.NODE_ENV !== 'development' ? '/superfans-sharebox' : '/'

  return (
    <div className={styles.root}>
      <Router basename={basename}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/sharebox">
            <Sharebox />
          </Route>
          <Route path="/sharepage">
            <Sharepage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default hot(App)
