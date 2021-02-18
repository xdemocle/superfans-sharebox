import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../../pages/home/home'
import Dashboard from '../../pages/dashboard/dashboard'
import Sharepage from '../../pages/sharepage/sharepage'
import Thankspage from '../../pages/thankspage/thankspage'
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
          <Route path="/dashboard/:username">
            <Dashboard />
          </Route>
          <Route path="/share/:username/:id">
            <Sharepage />
          </Route>
          <Route path="/thanks/:username">
            <Thankspage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default hot(App)
