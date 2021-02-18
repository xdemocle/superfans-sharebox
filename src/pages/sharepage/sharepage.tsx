import React, { useState } from 'react'
import classnames from 'classnames'
import { Link, useParams } from 'react-router-dom'
import uniqid from 'uniqid'
import useRewards from '../../hooks/useRewards'
import styles from './sharepage.module.css'

interface RouteParams {
  username: string
}

// On every refresh of the browser, we simulate an ID for the user visitor used
// also as rewardId.
const visitorRewardId = uniqid()

const Sharepage = () => {
  const { username } = useParams<RouteParams>()
  const { setReward, hasVotedAlready } = useRewards({ username })
  const [simulate, setSimulate] = useState(false)
  const hasVoted = hasVotedAlready(visitorRewardId)

  const userAcceptHandler = (accepted: string) => {
    if (simulate) {
      setReward(visitorRewardId, 'escape')
    } else {
      setReward(visitorRewardId, accepted)
    }
  }

  const simulateClickHandler = (event: { target: any }) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    setSimulate(value)
  }

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <header className={styles.header}>
            <h2 className={styles.title}>Ready for your reward?</h2>
          </header>

          <main>
            <p className="pb-2 leading-4 mb-2">
              Your friend <strong>{username}</strong> sent an invitation!
            </p>
            <div className="mb-3">--------------------------------</div>
            {!hasVoted ? (
              <div>
                <Link
                  to={`/thanks/${username}`}
                  className={classnames(styles.link, 'text-xl')}
                  onClick={() => userAcceptHandler('accepted')}
                >
                  Accept invitation
                </Link>
                <div className="py-2">or</div>
                <Link
                  to={`/thanks/${username}`}
                  className={classnames(styles.link, 'text-xs')}
                  onClick={() => userAcceptHandler('rejected')}
                >
                  Decline invitation
                </Link>
              </div>
            ) : (
              <div>
                <p className="pb-2 leading-4 mb-2">You already voted!</p>
              </div>
            )}
          </main>
        </div>
      </div>

      <div className={styles.helpLabelLeft}>
        <label>
          Simulate <strong>{username}</strong> user{' '}
          <input
            type="checkbox"
            checked={simulate}
            onChange={simulateClickHandler}
            className={styles.helpLabelLeftCheckbox}
          />
        </label>
      </div>
      <div className={styles.helpLabelRight}>
        Notice: Each page reload simulate a new visitor ID! Current ID:{' '}
        {visitorRewardId}
      </div>
    </div>
  )
}

export default Sharepage
