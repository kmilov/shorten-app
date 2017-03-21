import React, {Component, PropTypes} from 'react'
import styles from './_Button.css'

class Button extends Component {
  render() {
    return <button className={styles.button}>{this.props.children}</button>
  }
}

Button.defaultProps = {
  children: 'my button'
}
Button.propTypes = {
}

export default Button
