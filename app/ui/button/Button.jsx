import React, {Component, PropTypes} from 'react'
import styles from './_Button.css'

const Button = props => {
  let className = styles.button
  if(props.valid) {
    className = styles.active
  }

  let btnProps = {
    className: (props.valid) ? styles.active : styles.disabled,
    type: props.type,
    value: props.children,
    disabled: !props.valid
  }

  return <input
    {...btnProps}
    onClick={props.handleClick} />
}

Button.defaultProps = {
  children: 'my button',
  type: 'button',
  valid: false,
  onClick: function(){}
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  valid: PropTypes.bool,
  children: PropTypes.string
}

export default Button
