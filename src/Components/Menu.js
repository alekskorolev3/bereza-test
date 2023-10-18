import React, {useEffect, useState} from 'react'
import styles from "../styles/Menu.module.css"
import {NavLink} from "react-router-dom";
import {useUserActions} from "../actions/user.actions";

const Menu = () => {

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
                    <NavLink to="/data" className={({isActive}) =>
                        isActive ? styles.active : ""
                    }>
                        <li className={styles.menuItem}>
                            <img src="/home-2.svg" alt="home"/>
                            <span className={styles.menuText}>Главный экран</span>
                        </li>
                    </NavLink>

                    <NavLink to="/schema" className={({isActive}) =>
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

                        <div className={styles.submenuContainer}>
                            <NavLink to="/projectParams">
                                <div className={styles.menuItem}>
                                    <img src="/setting-3.svg" alt="setting3"/>
                                    <span className={styles.menuText}>Проектные параметры</span>
                                </div>
                            </NavLink>

                            <NavLink to="/labData">
                                <div className={styles.menuItem}>
                                    <img src="/setting-4.svg" alt="setting4"/>
                                    <span className={styles.menuText}>Лабораторные данные</span>
                                </div>
                            </NavLink>
                        </div>
                    </li>

                    <li className={styles.menuItem}>
                        <img src="/filter-search.svg" alt="filter"/>
                        <span className={styles.menuText}>Прогнозирование</span>
                    </li>

                    <NavLink to="/statistics" className={({isActive}) =>
                        isActive ? styles.active : ""
                    }>
                        <li className={styles.menuItem}>
                            <img src="/chart.svg" alt="chart"/>
                            <span className={styles.menuText}>Отчеты и статистика</span>
                        </li>
                    </NavLink>

                    <NavLink to="/user" className={({isActive}) =>
                        isActive ? styles.active : ""
                    }>
                        <li className={styles.menuItem}>
                            <img src="/profile.svg" alt="profile"/>
                            <span className={styles.menuText}>Пользователь</span>
                        </li>
                    </NavLink>
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
