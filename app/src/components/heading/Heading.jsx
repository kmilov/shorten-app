import React from 'react'
import {Row, Column} from 'ui/layout'
import styles from './_Heading.css'

const Heading = props => <header className={styles.heading}>
  <div className={styles.logo}>
    <h1 className={styles.title}>Shooooort</h1>
  </div>
  <p className={styles.copy}>The link shortener with a long name</p>
</header>

export default Heading
