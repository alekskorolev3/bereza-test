import React, {useState} from 'react'
import styles from "../styles/Header.module.css"
import Mode from "./Mode";
import Notifications from "./Notifications";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [mode, setMode] = useState({isOpen: false, current: "Автоматический"})

    return (
        <>
            <header className={styles.header}>

                <img src="/menu-open.svg" alt="menu-open" className={styles.menuIcon}/>
                <div className={styles.modeWrapper}>
                    <div className={styles.listWrapper}>
                        <div className={styles.listWrapperInner} onClick={() => setMode((prev) => ({...prev, isOpen: !prev.isOpen}))}>
                            <span className={styles.modeText}>Текущий режим работы</span>
                            <img src="/arrow_down.svg" alt="arrow_down" />
                        </div>



                        {mode.isOpen ? <div className={styles.dropdown}>
                            <span className={styles.dropdownItem} style={mode.current === "Автоматический" ? {fontWeight: "600"} : {}}
                                  onClick={() => setMode(() => ({isOpen: false, current: "Автоматический"}))}
                            >
                                Автоматический
                            </span>
                            <span className={styles.dropdownItem} style={mode.current === "Локальный" ? {fontWeight: "600"} : {}}
                                  onClick={() => setMode(() => ({isOpen: false, current: "Локальный"}))}
                            >
                                Локальный
                            </span>
                        </div> : null}
                    </div>

                    <Mode title={mode.current}/>
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
