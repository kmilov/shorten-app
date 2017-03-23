import React, {Component, PropTypes} from 'react'
import Action from 'ui/action'
import styles from './_ShortedLink.css'
import table from 'styles/_table.css'

class ShortedLink extends Component {
  componentWillMount() {
    this.setState({showCopyAction: false})
  }

  handleActionMouseEnter(e) {
    this.setState({showCopyAction: true})
  }

  handleActionMouseLeave(e) {
    this.setState({showCopyAction: false})
  }

  handleCopyAction(e){
    // TODO Implement copy
    console.warn("TODO: no copy yet")
  }

  render() {
    return (
      <div className={styles.result}>
        <div className={table.table}>
          <div
            className={table.maincol}
            onMouseEnter={this.handleActionMouseEnter.bind(this)}
            onMouseLeave={this.handleActionMouseLeave.bind(this)}>
            <a
              target="_new"
              href={`http://${this.props.proxy}/${this.props.shortcode}`}
              className={styles.link}>
              <span>shooooort.com/</span>
              <mark className={styles.shortcode}>{this.props.shortcode}</mark>
            </a>
            {/*Show copy action on hover*/}
            {this.state.showCopyAction &&
                <Action handler={this.handleCopyAction.bind(this)}>Click to copy</Action>
            }
            <span className={styles.target}>{this.props.link}</span>
          </div>

          {/*Visits column*/}
          <div className={table.col}>
            <span className={table.label}>Visits </span>
            <span className={styles.info}>{this.props.redirectCount}</span>
          </div>

          {/*Last Visited column*/}
          <div className={table.col}>
            <span className={table.label}>last visited </span>
            <span className={styles.info}>{this.props.startDate}</span>
          </div>
        </div>
      </div>
    )
  }
}

ShortedLink.defaultProps = {
  proxy: 'gymia-shorty.herokuapp.com',
  visits: '114',
  redirectCount: 0,
  startDate: ''
}

ShortedLink.propTypes = {
  link: PropTypes.string.isRequired,
  shortcode: PropTypes.string.isRequired,
  visits: PropTypes.string,
  redirectCount: PropTypes.number,
  startDate: PropTypes.string
}
export default ShortedLink
