import React, { useState } from 'react'
import classnames from 'classnames'
import useRewards from '../../hooks/useRewards'
import styles from './sharebox.module.css'

interface Props {
  email: string
  username: string
  uniqueShareLink: string
}

const regexEmailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const Sharebox = (props: Props) => {
  const { email, username, uniqueShareLink } = props
  const { setReward, hasVotedAlready } = useRewards({ username })
  const [destinationEmail, setDestinationEmail] = useState('')
  const [emailError, setEmailError] = useState(false)

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

  const onSubmitHandler = (event: React.ChangeEvent<any>) => {
    event.preventDefault()
    setEmailError(false)

    if (!destinationEmail.length || !regexEmailCheck.test(destinationEmail)) {
      setEmailError(true)
    } else if (destinationEmail === email) {
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
        <form onSubmit={onSubmitHandler}>
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
              className={classnames(
                styles.input,
                emailError && styles.inputError
              )}
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
            <button className={styles.buttonSend} type="submit">
              Send email
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Sharebox
