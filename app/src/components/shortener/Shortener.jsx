import React, {PropTypes} from 'react'
import {Row, Column} from 'ui/layout'
import Button from 'ui/button'
import Input from 'ui/input'
import styles from './_Shortener.css'
import utilStyles from 'styles/_utils.css'

// Controlled form that can be
// handled by an external container component
const Shortener = props => (
  <form className={styles.shortener} onSubmit={props.handleSubmit}>
    <div className={styles.inputContainer}>
      <label htmlFor="shoorten_url" className={utilStyles.srOnly}>URL to shorten</label>
      <Input autoFocus={true} className={styles.input} id="shoorten_url" placeholder="Paste the link you want to shorten here" value={props.url} onChange={props.handleChange}/>
    </div>
    <Button valid={(props.url != '') ? true : false} type="submit">Shorten this link</Button>
  </form>
)

Shortener.displayName = "Shortener"

Shortener.propTypes = {
  url: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default Shortener
