import React from 'react'
import Emoji from 'a11y-react-emoji'
import { Reward } from '../../hooks/useGlobal'
import styles from './activity-feed.module.css'

interface Props {
  rewards: Reward[]
  username: string
}

const ActivityFeed = (props: Props) => {
  const { rewards, username } = props
  const countAcceptedRewards = rewards.filter((reward) => {
    return reward.value === 'accepted'
  }).length

  const rewardsSorted = rewards.sort((a, b) => {
    return b.timestamp - a.timestamp
  })

  return (
    <section className={styles.main}>
      <header className={styles.header}>Activity feed</header>
      <main className={styles.rows}>
        {rewardsSorted.map((reward) => {
          let output = null

          switch (reward.value) {
            case 'accepted':
              output = (
                <div key={reward.id} className={styles.row}>
                  <Emoji
                    className={styles.emoji}
                    symbol="😀"
                    label="laughing"
                  />
                  Your friend <strong>{username}</strong> earned you a reward!
                </div>
              )
              break
            case 'rejected':
              output = (
                <div key={reward.id} className={styles.row}>
                  <Emoji
                    className={styles.emoji}
                    symbol="😱"
                    label="astonished"
                  />
                  A friend visited your link, but didn't earn you a reward!
                </div>
              )
              break
            case 'escaped':
              output = (
                <div key={reward.id} className={styles.row}>
                  <Emoji className={styles.emoji} symbol="😳" label="blushed" />
                  You tried to refer yourself! Whoops!
                </div>
              )
              break
          }

          return output
        })}
      </main>
      <footer className={styles.footer}>
        <span className="mr-3">Total rewards</span>{' '}
        <strong>{countAcceptedRewards}</strong>
      </footer>
    </section>
  )
}

export default ActivityFeed
