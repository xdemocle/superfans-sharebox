import React from 'react'
import { useParams } from 'react-router-dom'
import InputSharingLink from '../../components/input-sharing-link/input-sharing-link'
import ActivityFeed from '../../components/activity-feed/activity-feed'
import Sharebox from '../../components/sharebox/sharebox'
import useUniqueLink from '../../hooks/useUniqueLink'
import useRewards from '../../hooks/useRewards'
import styles from './dashboard.module.css'

interface RouteParams {
  username: string
}

const Dashboard = () => {
  const { username } = useParams<RouteParams>()
  const { uniqueLink } = useUniqueLink({ username })
  const { rewards } = useRewards({ username })

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <header className={styles.header}>
            <h2 className={styles.title}>We love our super-fans!</h2>
          </header>
          <main className={styles.main}>
            <div className={styles.columnLeft}>
              <InputSharingLink uniqueShareLink={uniqueLink} />
              <p className="pb-2 leading-4 mb-2">
                Welcome back, you've referred friends!
                <br />
                Keep going for more rewards.
              </p>
              <ActivityFeed rewards={rewards} username={username} />
            </div>
            <div className={styles.columnRight}>
              <Sharebox
                uniqueShareLink={uniqueLink}
                email={`${username}@mailprovider.com`}
                username={username}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
