import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
      </header>
      <main>
        <ul>
          <li>
            <NavLink to="/" className={styles.link}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={styles.link}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/sharebox" className={styles.link}>
              Sharebox
            </NavLink>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Home
