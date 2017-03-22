import React, {Component, PropTypes} from 'react'
import styles from './_Action.css'

const Action = props => {
  return <a className={styles.action}
    onClick={props.handler}>{props.children}</a>
}

Action.defaultProps = {
  children: 'my action'
}

Action.propTypes = {
  handler: PropTypes.func.isRequired,
  children: PropTypes.string
}

export default Action
