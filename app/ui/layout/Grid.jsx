import React from 'react'
import styles from './_Grid.css'

// Container Component
export const Container = props => <div className={styles.container}>{props.children}</div>

// TBD: Row
export const  Row = props => <div>{props.children}</div>

// TBD Column
export const  Column = props => <div className={styles.column}>{props.children}</div>
