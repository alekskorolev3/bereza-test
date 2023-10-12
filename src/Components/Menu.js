import React, {useEffect, useState} from 'react'
import styles from "../styles/Menu.module.css"
import {NavLink} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {authAtom} from "../state/auth";
import {useUserActions} from "../actions/user.actions";

const Menu = () => {

    const auth = useRecoilValue(authAtom);
    const userActions = useUserActions();

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (
        <section className={styles.menu}>
            <div className={styles.menuContainer}>
                <div className={styles.menuItem + " " + styles.nohover} style={{height: "60px"}}>
                    <span className={styles.menuText}>{date.toLocaleDateString()}</span>
                    <span className={styles.menuText}>{date.toLocaleTimeString()}</span>
                </div>

                <ul className={styles.menuWrapper}>
                    <NavLink to="/data" className={({isActive, isPending}) =>
                        isActive ? styles.active : ""
                    }>
                        <li className={styles.menuItem}>
                            <img src="/home-2.svg" alt="home"/>
                            <span className={styles.menuText}>Главный экран</span>
                        </li>
                    </NavLink>

                    <NavLink to="/schema" className={({isActive, isPending}) =>
                        isActive ? styles.active : ""
                    }>
                        <li className={styles.menuItem}>
                            <img src="/3dcube.svg" alt="cube"/>
                            <span className={styles.menuText}>Технологическая схема</span>
                        </li>
                    </NavLink>


                    <li className={styles.menuItem}>
                        <img src="/setting-2.svg" alt="setting"/>
                        <span className={styles.menuText}>Режим работы</span>
                    </li>

                    <li className={styles.menuItem}>
                        <img src="/data-2.svg" alt="data"/>
                        <span className={styles.menuText}>Лабораторные данные</span>
                    </li>

                    <li className={styles.menuItem}>
                        <img src="/filter-search.svg" alt="filter"/>
                        <span className={styles.menuText}>Прогнозирование</span>
                    </li>

                    <li className={styles.menuItem}>
                        <img src="/chart.svg" alt="chart"/>
                        <span className={styles.menuText}>Отчеты и статистика</span>
                    </li>

                    <li className={styles.menuItem}>
                        <img src="/profile.svg" alt="profile"/>
                        <span className={styles.menuText}>Пользователь</span>
                    </li>
                </ul>
            </div>

            <div className={styles.menuItem} style={{borderBottom: "unset", borderTop: "1px solid #7698AA"}}
                 onClick={userActions.logout}>
                {/*<img src="/logout.svg" alt="logout"/>*/}
                <span className={styles.menuText}>Выход</span>
            </div>
        </section>
    )
}

export default Menu
