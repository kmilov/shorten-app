import React, {PropTypes} from 'react'
import styles from './_ShortedLink.css'
import table from 'styles/_table.css'

const ShortedLink = props => {
  return <div className={styles.result}>
    <div className={table.table}>
      <div className={table.maincol}>
        <a target="_new" href={`http://${props.proxy}/${props.shortcode}`} className={styles.link}>
          <span>shooooort.com/</span>
          <mark className={styles.shortcode}>{props.shortcode}</mark>
        </a>
        <span className={styles.target}>{props.link}</span>
      </div>
      <div className={table.col}>
        <span className={styles.info}>{props.visits}</span>
      </div>
      <div className={table.col}>
        <span className={styles.info}>{props.lastVisited}</span>
      </div>
    </div>
  </div>
}

ShortedLink.displayName = "ShortedLink"

ShortedLink.defaultProps = {
  proxy: 'gymia-shorty.herokuapp.com',
  visits: '114',
  lastVisited: '7 minutes ago'
}

ShortedLink.propTypes = {
  link: PropTypes.string.isRequired,
  shortcode: PropTypes.string.isRequired,
  visits: PropTypes.string,
  lastVisited: PropTypes.string
}
export default ShortedLink
