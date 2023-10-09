import React from 'react'
import styles from "../styles/Menu.module.css"
import {Link, NavLink} from "react-router-dom";
const Menu = () => {
    return (
        <section className={styles.menu}>
            <div className={styles.menuContainer}>
                <div className={styles.menuItem + " " + styles.nohover} style={{height: "60px"}}>
                    <span className={styles.menuText}>20 сентября 2023 12:24:20</span>
                </div>

                <ul className={styles.menuWrapper}>
                    <NavLink to="/" className={({ isActive, isPending }) =>
                        isActive ? styles.active : ""
                    }>
                        <li className={styles.menuItem}>
                            <img src="/home-2.svg" alt="home"/>
                            <span className={styles.menuText}>Главный экран</span>
                        </li>
                    </NavLink>

                    <NavLink to="/schema" className={({ isActive, isPending }) =>
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
                </ul>
            </div>

            <div className={styles.menuItem} style={{borderBottom: "unset", borderTop: "1px solid #7698AA"}}>
                <img src="/logout.svg" alt="logout"/>
                <span className={styles.menuText}>Выход</span>
            </div>
        </section>
    )
}

export default Menu
