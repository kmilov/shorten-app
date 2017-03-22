import React, {PropTypes} from 'react'
import styles from './_ShortedLink.css'
import table from 'styles/_table.css'

const ShortedLink = props => {
  return <div className={styles.result}>
    <div className={table.table}>
      <div className={table.maincol}>
        <a target="_new" href={`http://${props.link}/${props.shoort}`} className={styles.link}>
          <span>shooooort.com/</span>
          <mark className={styles.shortcode}>{props.shoort}</mark>
        </a>
        <span className={styles.target}>{props.reallink}</span>
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
  link: 'gymia-shorty.herokuapp.com',
  shoort: '97a8d7s',
  reallink: 'http://nytimes.com/this-is-a-really-long-url-damn-so-long-and-there-is-more-long-',
  visits: '114',
  lastVisited: '7 minutes ago'
}

ShortedLink.propTypes = {
  link: PropTypes.string,
  shoort: PropTypes.string,
  visits: PropTypes.string,
  lastVisited: PropTypes.string
}
export default ShortedLink
