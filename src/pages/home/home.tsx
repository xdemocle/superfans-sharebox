import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <div>superfans-sharebox</div>
      </header>
      <main>
        <strong>Demo Dashboards:</strong>
        <br />
        <NavLink to="/dashboard/mikek" className={styles.link}>
          Mike Knights
        </NavLink>{' '}
        |{' '}
        <NavLink to="/dashboard/charliec" className={styles.link}>
          Charlie Chaplin
        </NavLink>{' '}
        |{' '}
        <NavLink to="/dashboard/johnd" className={styles.link}>
          John Doe
        </NavLink>
      </main>
    </div>
  )
}

export default Home
