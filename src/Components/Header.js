import React, {useState} from 'react'
import styles from "../styles/Header.module.css"
import Mode from "./Mode";
import Notifications from "./Notifications";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header className={styles.header}>
                <div className={styles.modeWrapper}>
                    <span className={styles.modeText}>Режим</span>
                    <Mode title="Автоматический"/>
                </div>

                <span className={styles.title}>Помощник оператора WWTP</span>

                <div className={styles.logoWrapper}>
                    <img src="/notification.svg" alt="notifications" style={isOpen ? {filter: "invert(78%) sepia(53%) saturate(1821%) hue-rotate(170deg) brightness(103%) contrast(101%)"} : null} className={styles.notifyLogo} onClick={() => setIsOpen((prev) => !prev)}/>
                    <img src="/amisit_logo.svg" alt="logo1"/>
                </div>
            </header>

            {isOpen ? <Notifications/> : null}
        </>
    )

}

export default Header;
