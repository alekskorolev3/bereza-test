import React from 'react'
import styles from "../styles/Mode.module.css"

const Mode = ({title}) => {

    const getIndicatior = () => {
        switch (title) {
            case 'Работает':
                return <div className={styles.indicator + ' ' + styles.green}/>
            case 'Автоматический':
                return <div className={styles.indicator + ' ' + styles.green}/>
            case 'Локальный':
                return <div className={styles.indicator + ' ' + styles.yellow}/>
            case 'Ошибка':
                return <div className={styles.indicator + ' ' + styles.red}/>
            case 'Подключение':
                return <div className={styles.indicator + ' ' + styles.gray}/>
            default:
                return <div className={styles.indicator + ' ' + styles.gray}/>
        }
    }

    return (
       <div className={styles.container}>
           <span className={styles.text}>{title}</span>
           {getIndicatior()}
       </div>
    )
}

export default Mode
