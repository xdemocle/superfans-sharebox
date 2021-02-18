import React from 'react'
import { setSyntheticLeadingComments } from 'typescript'
import styles from './sharebox.module.css'

interface Props {
  email: string
  uniqueShareLink: string
}

const Sharebox = (props: Props) => {
  const { email, uniqueShareLink } = props

  const clickTabHandler = (text: string) => {
    window.alert(`Demo click: ${text}`)
  }

  const onSubmitHandler = () => {
    window.alert('Submitting form')
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
        <div className="mb-3">
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
          />
        </div>
        <div className="mb-3">
          <div className={styles.textarea} contentEditable="true">
            To my good friend.
            <br />
            Please buy things here:
            <br />
            {uniqueShareLink}
          </div>
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
