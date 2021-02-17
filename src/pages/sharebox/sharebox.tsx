import React from 'react'
// import classnames from 'classnames'
import Emoji from 'a11y-react-emoji'
import styles from './sharebox.module.css'

const Sharebox = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <header className={styles.header}>
            <h2 className={styles.title}>We love our super-fans!</h2>
          </header>
          <main className={styles.main}>
            <div className={styles.columnLeft}>
              <p className="pb-1">Your unique sharing link</p>
              <div className="pb-3">
                <input className={styles.inputSharing} />
              </div>
              <p className="pb-2 leading-4 mb-2">
                Welcome back, you've referred friends!
                <br />
                Keep going for more rewards.
              </p>
              <section className={styles.feed}>
                <header className={styles.feedHeader}>Activity feed</header>
                <main className={styles.feedRows}>
                  <div className={styles.feedRow}>
                    <Emoji
                      className={styles.feedEmoji}
                      symbol="😀"
                      label="laughing"
                    />
                    Your friend <strong>Mikey</strong> earned you a reward!
                  </div>
                  <div className={styles.feedRow}>
                    <Emoji
                      className={styles.feedEmoji}
                      symbol="😱"
                      label="astonished"
                    />
                    A friend visited your link, but didn't earn you a reward!
                  </div>
                  <div className={styles.feedRow}>
                    <Emoji
                      className={styles.feedEmoji}
                      symbol="😳"
                      label="blushed"
                    />
                    You tried to refer yourself! Whoops!
                  </div>
                  <div className={styles.feedRow}>
                    <Emoji
                      className={styles.feedEmoji}
                      symbol="😀"
                      label="laughing"
                    />
                    Your friend <strong>Mikey</strong> earned you a reward!
                  </div>
                  <div className={styles.feedRow}>
                    <Emoji
                      className={styles.feedEmoji}
                      symbol="😱"
                      label="astonished"
                    />
                    A friend visited your link, but didn't earn you a reward!
                  </div>
                  <div className={styles.feedRow}>
                    <Emoji
                      className={styles.feedEmoji}
                      symbol="😳"
                      label="blushed"
                    />
                    You tried to refer yourself! Whoops!
                  </div>
                </main>
                <footer className={styles.feedFooter}>
                  <span className="mr-3">Total rewards</span> <strong>1</strong>
                </footer>
              </section>
            </div>
            <div className={styles.columnRight}>columnRight</div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Sharebox
