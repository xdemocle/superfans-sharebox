import React, { Fragment, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styles from './input-sharing-link.module.css'

interface Props {
  uniqueShareLink: string
}

const InputSharingLink = (props: Props) => {
  const { uniqueShareLink } = props
  const [inputCopied, setInputCopied] = useState(false)
  const [inputCopyValue, setInputCopyValue] = useState(uniqueShareLink)

  const onInputCopy = () => {
    setInputCopied(true)
    setTimeout(() => setInputCopied(false), 5000)
  }

  return (
    <Fragment>
      <p className="pb-1 text-sm">
        Your unique sharing link{' '}
        {!!inputCopied && <span className={styles.copied}>copied!</span>}
      </p>
      <div className="pb-3 relative">
        <input className={styles.input} value={inputCopyValue} readOnly />
        <CopyToClipboard onCopy={onInputCopy} text={inputCopyValue}>
          <button
            className={styles.button}
            title="Copy link"
            aria-label="Copy link"
          >
            <span className={styles.buttonText}>Copy link</span>
          </button>
        </CopyToClipboard>
      </div>
    </Fragment>
  )
}

export default InputSharingLink
