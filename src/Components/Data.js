import styles from "../styles/Data.module.css"
import {useRecoilValue, useSetRecoilState} from "recoil";
import {messagesAtom} from "../state/messages";
import React, {useEffect, useState} from "react";
import {message} from "antd";
import {wsAPI} from "../helpers/const";
import Mode from "./Mode";
// import {w3cwebsocket as W3CWebSocket} from "websocket";



function Data() {

    const W3CWebSocket = require('websocket').w3cwebsocket;

    const [ws, setWs] = useState(null)

    let timeout = 200

    useEffect(() => {
        if (!ws) {
            connect();
        }
    }, [])


    const connect = () => {
        let ws = new W3CWebSocket(`${wsAPI}/socket-server/`);
        let connectInterval;

        ws.onopen = () => {
            console.log("connected websocket main component");
            setWs(ws)
            timeout = 250;
            clearTimeout(connectInterval);
        };

        ws.onmessage = (event) => {
            if ('data' in JSON.parse(event.data)) {
                setMessages((messages) => [...messages, JSON.parse(event.data)]);
            }

        };
        ws.onerror = (err) => {
            console.error(
                "Socket encountered error: ",
                err.message,
                "Closing socket"
            );

            ws.close();
            error()
            setMessages([])
        };

        ws.onclose = e => {
            console.log(
                `Socket is closed. Reconnect will be attempted in ${Math.min(
                    10000 / 1000,
                    (timeout + timeout) / 1000
                )} second.`,
                e.reason
            );

            timeout = timeout + timeout; //increment retry interval
            connectInterval = setTimeout(check, Math.min(10000, timeout)); //call check function after timeout
        };
    };

    const check = () => {
        if (!ws || ws.readyState === WebSocket.CLOSED) {
            connect()
        }
    };

    const messages = useRecoilValue(messagesAtom);
    const setMessages = useSetRecoilState(messagesAtom);

    const [messageApi, contextHolder] = message.useMessage();
    const error = () => {
        messageApi.open({
            type: 'error',
            content: `Ошибка подключения к серверу ${wsAPI}/socket-server/`,
        });
    };

    return (
        <>
            {contextHolder}
            <div className={styles.container}>
                <h3 className={styles.title}>Главный экран</h3>
                <div className={styles.containerInner}>
                    {
                        messages.length !== 0 ?
                            [...messages].pop()?.status !== "connected" ?
                                [...messages].pop()?.data.map((data, i) => (

                                    <div key={i} className={styles.cardContainer}>
                                        <span className={styles.paramName}>{data.name}</span>

                                        <div className={styles.valuesContainer}>
                                            <div className={styles.valueWrapper}>
                                                <img src="/valueIcon.svg" alt="value" className={styles.icon}/>
                                                <div className={styles.valueInnerWrapper}>
                                                    <span className={styles.value}>Показания</span>
                                                    <span className={styles.value}>{data.value}</span>
                                                </div>
                                            </div>

                                            <div className={styles.valueWrapper}>
                                                <img src="/dateIcon.svg" alt="date" className={styles.icon}/>
                                                <div className={styles.valueInnerWrapper}>
                                                    <span className={styles.value}>Время</span>
                                                    <span className={styles.value}>{data.time}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.statusContainer}>
                                            <span className={styles.text}>Статус</span>
                                            <Mode title="Работает"/>
                                        </div>
                                    </div>
                                )) :
                                <div className={styles.cardContainer}>
                                    <span className={styles.paramName}>Датчик</span>

                                    <div className={styles.valuesContainer}>
                                        <div className={styles.valueWrapper}>
                                            <img src="/valueIcon.svg" alt="" className="icon"/>
                                            <div className={styles.valueInnerWrapper}>
                                                <span className={styles.value}>Показания</span>
                                                <span className={styles.value}>Подключение к серверу...</span>
                                            </div>
                                        </div>

                                        <div className={styles.valueWrapper}>
                                            <img src="/dateIcon.svg" alt="" className="icon"/>
                                            <div className={styles.valueInnerWrapper}>
                                                <span className={styles.value}>Время</span>
                                                <span className={styles.value}>Подключение к серверу...</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.statusContainer}>
                                        <span className={styles.text}>Статус</span>
                                        <Mode title="Подключение"/>
                                    </div>
                                </div> :

                            <div className={styles.cardContainer}>
                                <span className={styles.paramName}>Датчик</span>

                                <div className={styles.valuesContainer}>
                                    <div className={styles.valueWrapper}>
                                        <img src="/valueIcon.svg" alt="" className="icon"/>
                                        <div className={styles.valueInnerWrapper}>
                                            <span className={styles.value}>Показания</span>
                                            <span className={styles.value}>-</span>
                                        </div>
                                    </div>

                                    <div className={styles.valueWrapper}>
                                        <img src="/dateIcon.svg" alt="" className="icon"/>
                                        <div className={styles.valueInnerWrapper}>
                                            <span className={styles.value}>Время</span>
                                            <span className={styles.value}>-</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.statusContainer}>
                                    <span className={styles.text}>Статус</span>
                                    <Mode title="Подключение"/>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Data;
