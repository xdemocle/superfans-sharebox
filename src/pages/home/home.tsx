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
        <NavLink to="/dashboard" className={styles.link}>
          Dashboard
        </NavLink>{' '}
        |{' '}
        <NavLink to="/sharebox" className={styles.link}>
          Sharebox
        </NavLink>
      </main>
    </div>
  )
}

export default Home
