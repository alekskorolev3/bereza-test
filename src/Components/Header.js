import React from 'react'
import styles from "../styles/Header.module.css"
import Mode from "./Mode";

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.modeWrapper}>
                <span className={styles.modeText}>Режим</span>
                <Mode title="Автоматический"/>
            </div>

            <span className={styles.title}>Помощник оператора WWTP</span>

            <div className={styles.logoWrapper}>
                <img src="/amisit_logo.svg" alt="logo1"/>
                {/*<img src="/bereza_logo.png" alt="logo2"/>*/}
            </div>
        </header>
    )

}

export default Header;
