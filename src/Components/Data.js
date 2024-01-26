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
                setMessages((messages) => [...messages, [JSON.parse(event.data)]]);
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


    const mockData = {
        "bbo1": [
            {
                "name": "valve_4",
                "value": 27.0,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:09:56",
                "bbo_id": 1
            },
            {
                "name": "valve_3",
                "value": 21.0,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:09:54",
                "bbo_id": 1
            },
            {
                "name": "valve_2",
                "value": 61.0,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:09:51",
                "bbo_id": 1
            },
            {
                "name": "valve_1",
                "value": 47.0,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:09:49",
                "bbo_id": 1
            },
            {
                "name": "OVP",
                "value": -46.253662109375,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:09:47",
                "bbo_id": 1
            },
            {
                "name": "air_consumption",
                "value": 0.6263937950134277,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:09:45",
                "bbo_id": 1
            },
            {
                "name": "consumption_silt_level",
                "value": 0.957268476486206,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:09:43",
                "bbo_id": 1
            },
            {
                "name": "redundant_silt_level",
                "value": 1.4157408475875854,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:09:41",
                "bbo_id": 1
            },
            {
                "name": "silt_level",
                "value": 5.138175964355469,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:09:39",
                "bbo_id": 1
            },
            {
                "name": "temperature",
                "value": 15.241003036499023,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:09:37",
                "bbo_id": 1
            },
            {
                "name": "acidity",
                "value": 1.1742870807647705,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:09:35",
                "bbo_id": 1
            },
            {
                "name": "turbidity",
                "value": 2.228086233139038,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:09:33",
                "bbo_id": 1
            }
        ],
        "bbo2": [
            {
                "name": "silt_level",
                "value": 1.8098440170288086,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:10:06",
                "bbo_id": 2
            },
            {
                "name": "temperature",
                "value": 11.59305477142334,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:10:04",
                "bbo_id": 2
            },
            {
                "name": "OVP",
                "value": -485.8000183105469,

                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:10:02",
                "bbo_id": 2
            },
            {
                "name": "acidity",
                "value": 7.617603302001953,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:10:00",
                "bbo_id": 2
            },
            {
                "name": "oxygen",
                "value": 2.4503860473632812,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:09:58",
                "bbo_id": 2
            }
        ],
        "bbo3": [
            {
                "name": "silt_level",
                "value": 0.6268240809440613,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:10:17",
                "bbo_id": 3
            },
            {
                "name": "oxygen",
                "value": 0.0,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:10:15",
                "bbo_id": 3
            },
            {
                "name": "turbidity",
                "value": 4.946056365966797,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:10:13",
                "bbo_id": 3
            },
            {
                "name": "acidity",
                "value": 6.689656734466553,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:10:11",
                "bbo_id": 3
            },
            {
                "name": "OVP",
                "value": -447.8999938964844,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:10:08",
                "bbo_id": 3
            }
        ],
        "bbo4": [
            {
                "name": "silt_level",
                "value": 16666.0,
                "is_main": true,
                "is_masked": true,
                "is_ready": true,
                "is_accident": true,
                "time": "26.01.2024 13:11:58",
                "bbo_id": 4
            },
            {
                "name": "silt_level",
                "value": 0.0,
                "is_main": true,
                "is_masked": true,
                "is_ready": true,
                "is_accident": true,
                "time": "26.01.2024 13:11:01",
                "bbo_id": 4
            },
            {
                "name": "silt_level",
                "value": 0.957268476486206,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:10:28",
                "bbo_id": 4
            },
            {
                "name": "oxygen",
                "value": 1.5051460266113281,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:10:25",
                "bbo_id": 4
            },
            {
                "name": "turbidity",
                "value": 8.823822021484375,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "26.01.2024 13:10:23",
                "bbo_id": 4
            }
        ]
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
                                [...messages].pop()?.map((data) => (

                                    <div className={styles.containerInner}>
                                        <div key={1} className={styles.rowContainer}>
                                            <span className={styles.rowTitle}>
                                                ББО 1
                                            </span>
                                            {
                                                data.bbo1?.map((data, i) => (
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
                                                ))
                                            }
                                        </div>

                                        <div key={2} className={styles.rowContainer}>
                                            <span className={styles.rowTitle}>
                                                ББО 2
                                            </span>
                                            {
                                                data.bbo2?.map((data, i) => (
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
                                                ))
                                            }
                                        </div>

                                        <div key={3} className={styles.rowContainer}>
                                            <span className={styles.rowTitle}>
                                                ББО 3
                                            </span>
                                            {
                                                data.bbo3?.map((data, i) => (
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
                                                ))
                                            }
                                        </div>

                                        <div key={4} className={styles.rowContainer}>
                                            <span className={styles.rowTitle}>
                                                ББО 4
                                            </span>
                                            {
                                                data.bbo4?.map((data, i) => (
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
                                                ))
                                            }
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
