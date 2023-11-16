import styles from "../styles/Data.module.css"
import {useRecoilValue, useSetRecoilState} from "recoil";
import {messagesAtom} from "../state/messages";
import React, {useEffect} from "react";
import {message} from "antd";
import {wsAPI} from "../helpers/const";
import Mode from "./Mode";



function Data() {

    const W3CWebSocket = require('websocket').w3cwebsocket;
    let client = null;

    useEffect(() => {
        if (!client) {
            client = new W3CWebSocket(`${wsAPI}/socket-server/`);

            client.onmessage = (event) => {

                if ('data' in JSON.parse(event.data)) {
                    setMessages((messages) => [...messages, JSON.parse(event.data)]);
                }

            };
            client.onerror = function () {
                error()
                setMessages([])
            };
        }
    }, [])

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
