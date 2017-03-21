import React from 'react'
import {Row, Column} from 'ui/layout'
import styles from './_ShortedLink.css'

const ShortedLink = props => (
  <div className={styles.shortedlink}>
    <Row>
      <Column>
        <a href={`${props.link}${props.shoort}`} className={styles.link}>
          <span>{props.link}</span>
          <mark className={styles.linkmark}>{props.shoort}</mark>
        </a>
        <span className={styles.reallink}>{props.shoorten}</span>
      </Column>

      <Column>
        <div className={styles.visits}>
        <span>{props.visits}</span>
        </div>
      </Column>

      <Column>
        <div className={styles.lastVisited}>
        <span>{props.lastVisited}</span>
        </div>
      </Column>
    </Row>
  </div>
)


ShortedLink.defaultProps = {
  link: 'shooort.com/',
  shoort: 'fca1er3',
  shoorten: 'http://example.com/long-url-to-test',
  visits: '1140',
  lastVisited: '7 minutes ago'
}

export default ShortedLink
