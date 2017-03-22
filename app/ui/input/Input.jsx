import React, {Component, PropTypes} from 'react'
import styles from './_Input.css'

const Input = props => {
  let className = styles.input
  if(props.className) {
    className += " "+props.className
  }
  return <input
    id={props.id}
    type={props.type}
    className={className}
    value={props.value}
    placeholder={props.placeholder}
    onChange={props.onChange} />
}

Input.defaultProps = {
  placeholder: 'Write something',
  type: 'text'
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
