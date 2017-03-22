import React, {Component, PropTypes} from 'react'
import styles from './_Input.css'

const Input = props => {
  let inputProps = {
    id: props.id,
    className: [styles.input, props.className].join(" "),
    type: props.type,
    value: props.value,
    placeholder: props.placeholder,
    autoFocus: props.autoFocus
  }

  return <input {...inputProps} onChange={props.onChange} />
}

Input.defaultProps = {
  placeholder: 'Write something',
  type: 'text',
  autoFocus: false
}
Input.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default Input
