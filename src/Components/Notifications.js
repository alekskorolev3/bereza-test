import React, {useEffect, useState} from 'react'
import styles from '../styles/Notifications.module.css'
import {message} from "antd";
import {wsAPI} from "../helpers/const";

const Notifications = () => {

    const W3CWebSocket = require('websocket').w3cwebsocket;
    let client = null

    useEffect(() => {
        if (!client) {
            client = new W3CWebSocket(`${wsAPI}/notification/`);
            client.onmessage = (event) => {

                if ('data' in JSON.parse(event.data)) {

                    let obj = JSON.parse(event.data)
                    if (Array.isArray(obj.data)) {
                        setNotifications(obj.data);
                    }
                    else {
                        setNotifications((notifications) => [obj.data, ...notifications]);
                    }

                }

            };
            client.onerror = function () {
                error()
                setNotifications([])
            };
        }
    }, [])

    const [notifications, setNotifications] = useState([])
    const [messageApi, contextHolder] = message.useMessage();
    const error = () => {
        messageApi.open({
            type: 'error',
            content: `Ошибка подключения к серверу ${wsAPI}/notification/`,
        });
    };

    const getIcon = (status) => {
        switch (status) {
            case 0:
                return <img src="/info.svg" alt="info"/>
            case 1:
                return <img src="/warning.svg" alt="warning"/>
            case 2:
                return <img src="/error.svg" alt="error"/>
            default:
                return <img src="/info.svg" alt="info"/>
        }
    }

    return (
        <>
            {contextHolder}
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <span>Уведомления</span>
                </div>

                {notifications.length ?
                    notifications.map((notification, i) => {

                        if (i <= 7) {
                            return (
                                <div key={i} className={styles.notificationContainer}>
                                    {getIcon(notification.status_code)}

                                    <div className={styles.notificationInnerContainer}>
                                        <span className={styles.text}>{notification?.message}</span>
                                        <span className={styles.date}>{notification?.created_date}</span>
                                    </div>
                                </div>
                            )
                        }
                    }) :
                    (
                        <div className={styles.notificationContainer}>
                            <div className={styles.emptyContainer}>
                                <img src="/nodata.svg" alt="empty"/>
                                <span className={styles.emptyText}>Уведомлений нет</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Notifications;
