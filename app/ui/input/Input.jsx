import React, {Component, PropTypes} from 'react'
import styles from './_Input.css'

class Input extends Component {
  render() {
    return <input type={this.props.type} className={styles.input} value={this.props.value} />
  }
}

Input.defaultProps = {
  placeholder: 'Write something',
  type: 'text'
}
Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Input
