import React from 'react'
import styles from "../styles/Mode.module.css"

const Mode = ({title}) => {
    return (
       <div className={styles.container}>
           <span className={styles.text}>{title}</span>
           <div className={styles.indicator}/>
       </div>
    )
}

export default Mode
