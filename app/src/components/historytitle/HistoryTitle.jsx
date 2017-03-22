import React, {PropTypes} from 'react'
import Action from 'ui/action'
import styles from './_HistoryTitle.css'

const HistoryTitle = props => <div className={styles.title}>
  <h2 className={styles.label}>Previously shortened by you</h2>
  {props.history &&
    <Action handler={props.handler}>Clear History</Action>
  }
</div>

HistoryTitle.displayName = 'HistoryTitle'

HistoryTitle.propTypes = {
  handler: PropTypes.func.isRequired,
  history: PropTypes.bool.isRequired
}
export default HistoryTitle
