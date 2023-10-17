import {useEffect, useState} from "react";
import styles from "../styles/Data.module.css"
const W3CWebSocket = require('websocket').w3cwebsocket;

const client = new W3CWebSocket('ws://192.168.1.136:8000/ws/socket-server/');

function Data() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };

        client.onmessage = (event) => {

            if ('data' in JSON.parse(event.data)) {
                setMessages((prevMessages) => [...prevMessages, JSON.parse(event.data)]);
            }

        };
        client.onerror = function() {
            console.log('Connection Error');
        };
    }, []);


    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <span className={styles.title}>Датчик:</span>
                <span className={styles.value}>{
                    [...messages].pop()?.data?.name ? [...messages].pop()?.data?.name : "Подключение к серверу..."
                }</span>
            </div>

            <div className={styles.row}>
                <span className={styles.title}>Показания:</span>
                <span className={styles.value}>{[...messages].pop()?.data?.value ? [...messages].pop()?.data?.value : "Нет данных"}</span>
            </div>

            <div className={styles.row}>
                <span className={styles.title}>Время:</span>
                <span className={styles.value}>{[...messages].pop()?.data?.time ? [...messages].pop()?.data?.time : "Нет данных"}</span>
            </div>
        </div>
    )
}

export default Data;
