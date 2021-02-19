import React, { useState } from 'react'
import classnames from 'classnames'
import styles from './input-dialog.module.css'

type Props = {
  callback: (visitorName: string) => void
  onClose: () => void
}

const InputDialog = (props: Props) => {
  const { callback, onClose } = props
  const [visitorName, setVisitorName] = useState('')

  const inputChangeHandler = (event: React.ChangeEvent<any>) => {
    setVisitorName(event.target.value)
  }

  const onSubmit = (event: React.ChangeEvent<any>) => {
    event.preventDefault()
    callback(visitorName)
    onClose()
  }

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <header className="mb-4">Please, enter your name below:</header>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <input
              placeholder="Name"
              className={styles.input}
              value={visitorName}
              onChange={inputChangeHandler}
            />
          </div>
          <div>
            <button className={styles.button} type="submit">
              Confirm
            </button>
          </div>
        </form>
        <a className={styles.closeButton} onClick={onClose}>
          &#215;
        </a>
      </main>
    </div>
  )
}

export default InputDialog
