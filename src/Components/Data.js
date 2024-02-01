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
            if ('bbo1' in JSON.parse(event.data)) {
                setMessages((messages) => [messages[messages.length - 2], messages[messages.length - 1], JSON.parse(event.data)]);
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

    const convertUnicode = (unicode) => {
        let enc = encodeURIComponent(unicode)

        return decodeURIComponent(enc)
    }

    const mockData = {
        "bbo1": [{
            "name": "valve_4",
            "value": 27.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:25:03",
            "rus_name": "\u0417\u0430\u0434\u0432\u0438\u0436\u043a\u0430 4",
            "bbo_id": 1
        }, {
            "name": "valve_3",
            "value": 21.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:25:01",
            "rus_name": "\u0417\u0430\u0434\u0432\u0438\u0436\u043a\u0430 3",
            "bbo_id": 1
        }, {
            "name": "valve_2",
            "value": 61.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:24:59",
            "rus_name": "\u0417\u0430\u0434\u0432\u0438\u0436\u043a\u0430 2",
            "bbo_id": 1
        }, {
            "name": "valve_1",
            "value": 47.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:24:57",
            "rus_name": "\u0417\u0430\u0434\u0432\u0438\u0436\u043a\u0430 1",
            "bbo_id": 1
        }, {
            "name": "OVP",
            "value": -40.81578063964844,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:24:55",
            "rus_name": "\u041e\u0412\u041f",
            "bbo_id": 1
        }, {
            "name": "air_consumption",
            "value": 1.6573116779327393,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:24:53",
            "rus_name": "\u0420\u0430\u0441\u0445\u043e\u0434 \u0432\u043e\u0437\u0434\u0443\u0445\u0430",
            "bbo_id": 1
        }, {
            "name": "consumption_silt_level",
            "value": 0.5885303616523743,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:24:51",
            "rus_name": "\u0420\u0430\u0441\u0445\u043e\u0434 \u0438\u0437\u0431\u044b\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0438\u043b\u0430",
            "bbo_id": 1
        }, {
            "name": "redundant_silt_level",
            "value": 1.3678386211395264,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:24:49",
            "rus_name": "\u0418\u0437\u0431\u044b\u0442\u043e\u0447\u043d\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0438\u043b\u0430",
            "bbo_id": 1
        }, {
            "name": "silt_level",
            "value": 6.618844985961914,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:24:46",
            "rus_name": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0438\u043b\u0430",
            "bbo_id": 1
        }, {
            "name": "temperature",
            "value": 17.038471221923828,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:24:44",
            "rus_name": "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
            "bbo_id": 1
        }, {
            "name": "acidity",
            "value": 1.4006907939910889,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:24:42",
            "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c",
            "bbo_id": 1
        }, {
            "name": "turbidity",
            "value": 2.884554862976074,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:24:40",
            "rus_name": "\u041c\u0443\u0442\u043d\u043e\u0441\u0442\u044c",
            "bbo_id": 1
        }],
        "bbo2": [{
            "name": "silt_level",
            "value": 0.595528781414032,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:25:14",
            "rus_name": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0438\u043b\u0430",
            "bbo_id": 2
        }, {
            "name": "temperature",
            "value": 14.293558120727539,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:25:12",
            "rus_name": "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
            "bbo_id": 2
        }, {
            "name": "OVP",
            "value": -489.6000061035156,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:25:10",
            "rus_name": "\u041e\u0412\u041f",
            "bbo_id": 2
        }, {
            "name": "acidity",
            "value": 7.358160495758057,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:25:07",
            "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c",
            "bbo_id": 2
        }, {
            "name": "oxygen",
            "value": 0.1991599053144455,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:25:05",
            "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0440\u043e\u0434",
            "bbo_id": 2
        }],
        "bbo3": [{
            "name": "silt_level",
            "value": 1.6573116779327393,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:25:24",
            "rus_name": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0438\u043b\u0430",
            "bbo_id": 3
        }, {
            "name": "oxygen",
            "value": 0.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:25:22",
            "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0440\u043e\u0434",
            "bbo_id": 3
        }, {
            "name": "turbidity",
            "value": 3.5643181800842285,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:25:20",
            "rus_name": "\u041c\u0443\u0442\u043d\u043e\u0441\u0442\u044c",
            "bbo_id": 3
        }, {
            "name": "acidity",
            "value": 6.303897380828857,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:25:18",
            "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c",
            "bbo_id": 3
        }, {
            "name": "OVP",
            "value": -427.0999755859375,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:25:16",
            "rus_name": "\u041e\u0412\u041f",
            "bbo_id": 3
        }],
        "bbo4": [{
            "name": "silt_level",
            "value": 0.5885303616523743,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:25:35",
            "rus_name": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0438\u043b\u0430",
            "bbo_id": 4
        }, {
            "name": "oxygen",
            "value": 0.07040954381227493,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:25:33",
            "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0440\u043e\u0434",
            "bbo_id": 4
        }, {
            "name": "turbidity",
            "value": 12.971511840820312,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:25:31",
            "rus_name": "\u041c\u0443\u0442\u043d\u043e\u0441\u0442\u044c",
            "bbo_id": 4
        }, {
            "name": "acidity",
            "value": 6.252176284790039,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:25:28",
            "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c",
            "bbo_id": 4
        }, {
            "name": "OVP",
            "value": -426.3999938964844,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "01.02.2024 11:25:26",
            "rus_name": "\u041e\u0412\u041f",
            "bbo_id": 4
        }]
    }

    return (
        <>
            {contextHolder}
            <div className={styles.container}>
                <h3 className={styles.title}>Главный экран</h3>


                <div className={styles.containerInner}>
                    {
                        messages.length !== 0 ?
                            [...messages].pop()?.status !== "connected" ?
                                <div className={styles.containerInner}>
                                    <div key={1} className={styles.rowContainer}>
                                            <span className={styles.rowTitle}>
                                                ББО 1
                                            </span>
                                        {
                                            [...messages].pop()?.bbo1?.map((data, i) => (
                                                <div key={i} className={styles.cardContainer}>
                                                    <span className={styles.paramName}>{convertUnicode(data.rus_name)}</span>

                                                    <div className={styles.valuesContainer}>
                                                        <div className={styles.valueWrapper}>
                                                            <img src="/valueIcon.svg" alt="value"
                                                                 className={styles.icon}/>
                                                            <div className={styles.valueInnerWrapper}>
                                                                <span className={styles.value}>Показания</span>
                                                                <span className={styles.value}>{data.value.toFixed(1)}</span>
                                                            </div>
                                                        </div>

                                                        <div className={styles.valueWrapper}>
                                                            <img src="/dateIcon.svg" alt="date"
                                                                 className={styles.icon}/>
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
                                            ))
                                        }
                                    </div>

                                    <div key={2} className={styles.rowContainer}>
                                            <span className={styles.rowTitle}>
                                                ББО 2
                                            </span>
                                        {
                                            [...messages].pop()?.bbo2?.map((data, i) => (
                                                <div key={i} className={styles.cardContainer}>
                                                    <span className={styles.paramName}>{convertUnicode(data.rus_name)}</span>

                                                    <div className={styles.valuesContainer}>
                                                        <div className={styles.valueWrapper}>
                                                            <img src="/valueIcon.svg" alt="value"
                                                                 className={styles.icon}/>
                                                            <div className={styles.valueInnerWrapper}>
                                                                <span className={styles.value}>Показания</span>
                                                                <span className={styles.value}>{data.value.toFixed(1)}</span>
                                                            </div>
                                                        </div>

                                                        <div className={styles.valueWrapper}>
                                                            <img src="/dateIcon.svg" alt="date"
                                                                 className={styles.icon}/>
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
                                            ))
                                        }
                                    </div>

                                    <div key={3} className={styles.rowContainer}>
                                            <span className={styles.rowTitle}>
                                                ББО 3
                                            </span>
                                        {
                                            [...messages].pop()?.bbo3?.map((data, i) => (
                                                <div key={i} className={styles.cardContainer}>
                                                    <span className={styles.paramName}>{convertUnicode(data.rus_name)}</span>

                                                    <div className={styles.valuesContainer}>
                                                        <div className={styles.valueWrapper}>
                                                            <img src="/valueIcon.svg" alt="value"
                                                                 className={styles.icon}/>
                                                            <div className={styles.valueInnerWrapper}>
                                                                <span className={styles.value}>Показания</span>
                                                                <span className={styles.value}>{data.value.toFixed(1)}</span>
                                                            </div>
                                                        </div>

                                                        <div className={styles.valueWrapper}>
                                                            <img src="/dateIcon.svg" alt="date"
                                                                 className={styles.icon}/>
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
                                            ))
                                        }
                                    </div>

                                    <div key={4} className={styles.rowContainer}>
                                            <span className={styles.rowTitle}>
                                                ББО 4
                                            </span>
                                        {
                                            [...messages].pop()?.bbo4?.map((data, i) => (
                                                <div key={i} className={styles.cardContainer}>
                                                    <span className={styles.paramName}>{convertUnicode(data.rus_name)}</span>

                                                    <div className={styles.valuesContainer}>
                                                        <div className={styles.valueWrapper}>
                                                            <img src="/valueIcon.svg" alt="value"
                                                                 className={styles.icon}/>
                                                            <div className={styles.valueInnerWrapper}>
                                                                <span className={styles.value}>Показания</span>
                                                                <span className={styles.value}>{data.value.toFixed(1)}</span>
                                                            </div>
                                                        </div>

                                                        <div className={styles.valueWrapper}>
                                                            <img src="/dateIcon.svg" alt="date"
                                                                 className={styles.icon}/>
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
                                            ))
                                        }
                                    </div>
                                </div> :
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


                {/*<div className={styles.containerInner}>*/}
                {/*    {*/}
                {/*        messages.length !== 0 ?*/}
                {/*            [...messages].pop()?.status !== "connected" ?*/}
                {/*                [...messages].pop()?.data.map((data, i) => (*/}

                {/*                    <div key={i} className={styles.cardContainer}>*/}
                {/*                        <span className={styles.paramName}>{data.name}</span>*/}

                {/*                        <div className={styles.valuesContainer}>*/}
                {/*                            <div className={styles.valueWrapper}>*/}
                {/*                                <img src="/valueIcon.svg" alt="value" className={styles.icon}/>*/}
                {/*                                <div className={styles.valueInnerWrapper}>*/}
                {/*                                    <span className={styles.value}>Показания</span>*/}
                {/*                                    <span className={styles.value}>{data.value}</span>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}

                {/*                            <div className={styles.valueWrapper}>*/}
                {/*                                <img src="/dateIcon.svg" alt="date" className={styles.icon}/>*/}
                {/*                                <div className={styles.valueInnerWrapper}>*/}
                {/*                                    <span className={styles.value}>Время</span>*/}
                {/*                                    <span className={styles.value}>{data.time}</span>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}

                {/*                        <div className={styles.statusContainer}>*/}
                {/*                            <span className={styles.text}>Статус</span>*/}
                {/*                            <Mode title="Работает"/>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                )) :*/}
                {/*                <div className={styles.cardContainer}>*/}
                {/*                    <span className={styles.paramName}>Датчик</span>*/}

                {/*                    <div className={styles.valuesContainer}>*/}
                {/*                        <div className={styles.valueWrapper}>*/}
                {/*                            <img src="/valueIcon.svg" alt="" className="icon"/>*/}
                {/*                            <div className={styles.valueInnerWrapper}>*/}
                {/*                                <span className={styles.value}>Показания</span>*/}
                {/*                                <span className={styles.value}>Подключение к серверу...</span>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}

                {/*                        <div className={styles.valueWrapper}>*/}
                {/*                            <img src="/dateIcon.svg" alt="" className="icon"/>*/}
                {/*                            <div className={styles.valueInnerWrapper}>*/}
                {/*                                <span className={styles.value}>Время</span>*/}
                {/*                                <span className={styles.value}>Подключение к серверу...</span>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}

                {/*                    <div className={styles.statusContainer}>*/}
                {/*                        <span className={styles.text}>Статус</span>*/}
                {/*                        <Mode title="Подключение"/>*/}
                {/*                    </div>*/}
                {/*                </div> :*/}

                {/*            <div className={styles.cardContainer}>*/}
                {/*                <span className={styles.paramName}>Датчик</span>*/}

                {/*                <div className={styles.valuesContainer}>*/}
                {/*                    <div className={styles.valueWrapper}>*/}
                {/*                        <img src="/valueIcon.svg" alt="" className="icon"/>*/}
                {/*                        <div className={styles.valueInnerWrapper}>*/}
                {/*                            <span className={styles.value}>Показания</span>*/}
                {/*                            <span className={styles.value}>-</span>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}

                {/*                    <div className={styles.valueWrapper}>*/}
                {/*                        <img src="/dateIcon.svg" alt="" className="icon"/>*/}
                {/*                        <div className={styles.valueInnerWrapper}>*/}
                {/*                            <span className={styles.value}>Время</span>*/}
                {/*                            <span className={styles.value}>-</span>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}

                {/*                <div className={styles.statusContainer}>*/}
                {/*                    <span className={styles.text}>Статус</span>*/}
                {/*                    <Mode title="Подключение"/>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
        </>
    )
}

export default Data;
