import React from 'react'
import styles from './_Grid.css'

// Container Component
export const Container = props => <main className={styles.container}>{props.children}</main>

// TBD: Row
export const  Row = props => <div>{props.children}</div>

// TBD Column
export const  Column = props => <div className={styles.column}>{props.children}</div>
