import React, {PropTypes} from 'react'
import styles from './_HistoryTable.css'
import table from 'styles/_table.css'
import utils from 'styles/_utils.css';

const HistoryTable = props => {
  let colClasses = [utils.uppercase, table.col].join(" ")

  return <section className={styles.container}>
    <div className={table.table}>
      <div className={[utils.uppercase, table.maincol].join(" ")}>link</div>
      <div className={colClasses}>visits</div>
      <div className={colClasses}>last visited</div>
    </div>
    <div className={styles.records}>
      {props.records}
    </div>
  </section>
}


HistoryTable.propTypes = {
  records: PropTypes.array.isRequired
}

export default HistoryTable
