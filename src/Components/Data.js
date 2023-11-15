import styles from "../styles/Data.module.css"
import {useRecoilValue, useSetRecoilState} from "recoil";
import {messagesAtom} from "../state/messages";

const W3CWebSocket = require('websocket').w3cwebsocket;

const client = new W3CWebSocket('ws://192.168.1.136:8000/ws/socket-server/');

function Data() {

    const messages = useRecoilValue(messagesAtom);
    const setMessages = useSetRecoilState(messagesAtom);

    client.onopen = () => {
        console.log('WebSocket Client Connected');
    };

    client.onmessage = (event) => {

        if ('data' in JSON.parse(event.data)) {
            console.log(JSON.parse(event.data))
            setMessages((messages) => [...messages, JSON.parse(event.data)]);
        }

    };
    client.onerror = function () {
        console.log('Connection Error');
    };


    return (
        <div className={styles.container}>
            {
                [...messages].pop()?.status !== "connected" ?
                    [...messages].pop()?.data.map((data) => (
                        <>
                            <div className={styles.row}>
                                <span className={styles.title}>Датчик:</span>
                                <span className={styles.value}>{data.name}</span>
                            </div>

                            <div className={styles.row}>
                                <span className={styles.title}>Показания:</span>
                                <span className={styles.value}>{data.value}</span>
                            </div>

                            <div className={styles.row}>
                                <span className={styles.title}>Время:</span>
                                <span className={styles.value}>{data.time}</span>
                            </div>
                        </>
                    )) :
                    <>
                        <div className={styles.row}>
                            <span className={styles.title}>Датчик:</span>
                            <span className={styles.value}>Подключение к серверу...</span>
                        </div>

                        <div className={styles.row}>
                            <span className={styles.title}>Показания:</span>
                            <span className={styles.value}>Нет данных</span>
                        </div>

                        <div className={styles.row}>
                            <span className={styles.title}>Время:</span>
                            <span className={styles.value}>Нет данных</span>
                        </div>
                    </>
            }
        </div>
    )
}

export default Data;
