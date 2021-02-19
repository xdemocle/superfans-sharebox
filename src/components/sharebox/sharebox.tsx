import React, { useState } from 'react'
import useRewards from '../../hooks/useRewards'
import styles from './sharebox.module.css'

interface Props {
  email: string
  username: string
  uniqueShareLink: string
}

const Sharebox = (props: Props) => {
  const { email, username, uniqueShareLink } = props
  const { setReward, hasVotedAlready } = useRewards({ username })
  const [destinationEmail, setDestinationEmail] = useState('')

  const shareboxTextarea = (
    <span>
      To my good friend.
      <br />
      Please buy things here:
      <br />
      {uniqueShareLink}
    </span>
  )

  const clickTabHandler = (text: string) => {
    window.alert(`Demo click: ${text}`)
  }

  const inputOnChangeHandler = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setDestinationEmail(event.target.value)
  }

  const onSubmitHandler = () => {
    if (destinationEmail === email) {
      setReward(username + new Date().getTime(), 'escaped')
    } else {
      window.alert('Submitting form')
    }
  }

  return (
    <div className={styles.root}>
      <header className={styles.tabs}>
        <a
          className={styles.tabMail}
          onClick={() => clickTabHandler('Share via E-mail')}
          title="Share via E-mail"
        >
          Share via E-mail
        </a>
        <a
          className={styles.tabFacebook}
          onClick={() => clickTabHandler('Share on Facebook')}
          title="Share on Facebook"
        >
          Share on Facebook
        </a>
        <a
          className={styles.tabTwitter}
          onClick={() => clickTabHandler('Share on Twitter')}
          title="Share on Twitter"
        >
          Share on Twitter
        </a>
        <a
          className={styles.tabAttachment}
          onClick={() => clickTabHandler('Add an attachment')}
          title="Add an attachment"
        >
          Add an attachment
        </a>
      </header>
      <main className={styles.main}>
        <div className="mb-3 text-sm">
          <p>
            <span className="mr-2">From</span>
            <strong>{email}</strong>
          </p>
        </div>
        <div className="mb-3">
          <input
            name="email"
            placeholder="Email address"
            className={styles.input}
            onChange={inputOnChangeHandler}
          />
        </div>
        <div className="mb-3">
          <div
            className={styles.textarea}
            contentEditable="true"
            children={shareboxTextarea}
          />
        </div>
        <div>
          <button className={styles.buttonSend} onClick={onSubmitHandler}>
            Send email
          </button>
        </div>
      </main>
    </div>
  )
}

export default Sharebox
