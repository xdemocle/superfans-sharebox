import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './thankspage.module.css'

interface RouteParams {
  username: string
}

const Thankspage = () => {
  const { username } = useParams<RouteParams>()

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <header className={styles.header}>
            <h2 className={styles.title}>Thanks for confirmation!</h2>
          </header>
          <main>
            <p className="pb-2 leading-6 mb-2">
              Your preference about <strong>{username}</strong>'s reward has
              been registered.
            </p>
            <div>--------------------------------</div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Thankspage
