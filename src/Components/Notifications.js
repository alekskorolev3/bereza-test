import React, {useEffect, useState} from 'react'
import styles from '../styles/Notifications.module.css'

const Notifications = () => {

    const W3CWebSocket = require('websocket').w3cwebsocket;
    let client = null

    useEffect(() => {
        if (!client) {
            client = new W3CWebSocket('ws://192.168.2.43:8000/ws/notification/');
            client.onopen = () => {
                console.log('WebSocket Client Connected');
            };

            client.onmessage = (event) => {

                if ('data' in JSON.parse(event.data)) {

                    let obj = JSON.parse(event.data)
                    console.log(obj.data)
                    if (Array.isArray(obj.data)) {
                        console.log("here1")
                        setNotifications(obj.data);
                    }
                    else {
                        console.log("here2")
                        setNotifications((notifications) => [obj.data, ...notifications]);
                    }

                }

            };
            client.onerror = function () {
                console.log('Connection Error');
            };
        }
    }, [])

    const [notifications, setNotifications] = useState([])


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
    )
}

export default Notifications;
