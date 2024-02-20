import styles from "../styles/Data.module.css"
import {useRecoilValue, useSetRecoilState} from "recoil";
import {messagesAtom} from "../state/messages";
import React, {useEffect, useState} from "react";
import {ConfigProvider, Form, InputNumber, message} from "antd";
import {wsAPI} from "../helpers/const";
import MainParameters from "./Tables/MainParameters";
import Recycles from "./Tables/Recycles";
import OxygenConcSensors from "./Tables/OxygenConcSensors";
import DampersAirDucts from "./Tables/DampersAirDucts";

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

    const messages2 = [
        {
            "bbo1": [{
                "name": "oxygen",
                "value": 0.5182511210441589,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:05:55",
                "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0440\u043e\u0434",
                "bbo_id": 1
            }, {
                "name": "valve_4",
                "value": 27.0,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:05:53",
                "rus_name": "\u0417\u0430\u0434\u0432\u0438\u0436\u043a\u0430 4",
                "bbo_id": 1
            }, {
                "name": "valve_3",
                "value": 21.0,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:05:51",
                "rus_name": "\u0417\u0430\u0434\u0432\u0438\u0436\u043a\u0430 3",
                "bbo_id": 1
            }, {
                "name": "valve_2",
                "value": 61.0,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:05:49",
                "rus_name": "\u0417\u0430\u0434\u0432\u0438\u0436\u043a\u0430 2",
                "bbo_id": 1
            }, {
                "name": "valve_1",
                "value": 47.0,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:05:46",
                "rus_name": "\u0417\u0430\u0434\u0432\u0438\u0436\u043a\u0430 1",
                "bbo_id": 1
            }, {
                "name": "OVP",
                "value": -53.623626708984375,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:05:44",
                "rus_name": "\u041e\u0412\u041f",
                "bbo_id": 1
            }, {
                "name": "silt_level",
                "value": 6.6781110763549805,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:05:36",
                "rus_name": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0438\u043b\u0430",
                "bbo_id": 1
            }, {
                "name": "temperature",
                "value": 15.36093521118164,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:05:34",
                "rus_name": "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
                "bbo_id": 1
            }, {
                "name": "acidity",
                "value": 1.615569829940796,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:05:32",
                "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c",
                "bbo_id": 1
            }],
            "bbo2": [{
                "name": "silt_level",
                "value": 0.6568394899368286,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:06:10",
                "rus_name": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0438\u043b\u0430",
                "bbo_id": 2
            }, {
                "name": "temperature",
                "value": 13.360366821289062,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:06:07",
                "rus_name": "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
                "bbo_id": 2
            }, {
                "name": "OVP",
                "value": -487.0,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:06:05",
                "rus_name": "\u041e\u0412\u041f",
                "bbo_id": 2
            }, {
                "name": "acidity",
                "value": 7.5731658935546875,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:06:03",
                "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c",
                "bbo_id": 2
            }, {
                "name": "oxygen",
                "value": 0.810758650302887,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:06:01",
                "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0440\u043e\u0434",
                "bbo_id": 2
            }],
            "bbo3": [{
                "name": "silt_level",
                "value": 1.520917296409607,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:06:20",
                "rus_name": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0438\u043b\u0430",
                "bbo_id": 3
            }, {
                "name": "oxygen",
                "value": 0.0,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:06:18",
                "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0440\u043e\u0434",
                "bbo_id": 3
            }, {
                "name": "turbidity",
                "value": 0.028950994834303856,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:06:16",
                "rus_name": "\u041c\u0443\u0442\u043d\u043e\u0441\u0442\u044c",
                "bbo_id": 3
            }, {
                "name": "acidity",
                "value": 6.5362019538879395,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:06:14",
                "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c",
                "bbo_id": 3
            }, {
                "name": "OVP",
                "value": -447.5,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:06:12",
                "rus_name": "\u041e\u0412\u041f",
                "bbo_id": 3
            }],
            "bbo4": [{
                "name": "silt_level",
                "value": 0.7025508880615234,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:06:31",
                "rus_name": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0438\u043b\u0430",
                "bbo_id": 4
            }, {
                "name": "oxygen",
                "value": 0.0,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:06:29",
                "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0440\u043e\u0434",
                "bbo_id": 4
            }, {
                "name": "turbidity",
                "value": 6.607088565826416,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:06:27",
                "rus_name": "\u041c\u0443\u0442\u043d\u043e\u0441\u0442\u044c",
                "bbo_id": 4
            }, {
                "name": "acidity",
                "value": 6.61706018447876,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:06:24",
                "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c",
                "bbo_id": 4
            }, {
                "name": "OVP",
                "value": -452.00006103515625,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:06:22",
                "rus_name": "\u041e\u0412\u041f",
                "bbo_id": 4
            }],
            "common": [{
                "name": "water_consumption_out",
                "value": 213.7173309326172,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:05:59",
                "rus_name": "\u0420\u0430\u0441\u0445\u043e\u0434 \u0432\u043e\u0434\u044b \u0432\u044b\u0445\u043e\u0434",
                "bbo_id": 5
            }, {
                "name": "water_consumption_in",
                "value": 470.92333984375,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:05:57",
                "rus_name": "\u0420\u0430\u0441\u0445\u043e\u0434 \u0432\u043e\u0434\u044b \u0432\u0445\u043e\u0434",
                "bbo_id": 5
            }, {
                "name": "air_consumption",
                "value": 1.520917296409607,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:05:42",
                "rus_name": "\u0420\u0430\u0441\u0445\u043e\u0434 \u0432\u043e\u0437\u0434\u0443\u0445\u0430",
                "bbo_id": 5
            }, {
                "name": "consumption_silt_level",
                "value": 0.7025508880615234,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:05:40",
                "rus_name": "\u0420\u0430\u0441\u0445\u043e\u0434 \u0438\u0437\u0431\u044b\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0438\u043b\u0430",
                "bbo_id": 5
            }, {
                "name": "redundant_silt_level",
                "value": 0.9314670562744141,
                "is_main": true,
                "is_masked": false,
                "is_ready": true,
                "is_accident": false,
                "time": "08.02.2024 16:05:38",
                "rus_name": "\u0418\u0437\u0431\u044b\u0442\u043e\u0447\u043d\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0438\u043b\u0430",
                "bbo_id": 5
            }]
        }
    ]

    return (
        <>
            {/*{contextHolder}*/}
            <div className={styles.container}>
                <h3 className={styles.title}>Главный экран</h3>


                <div className={styles.paramsContainer}>
                    <ConfigProvider theme={{
                        token: {
                            fontFamily: "Euclid Circular A",
                        }
                    }}>
                        <Form className={styles.form}>

                            <table className={styles.table} style={{borderBottom: '0'}}>
                                <tr>
                                    <th>Параметр</th>
                                    <th>Значение</th>
                                </tr>
                                <tr>
                                    <td>Вход на ОС</td>
                                    <td>{[...messages].pop()?.common.filter(obj => obj.name === 'water_consumption_in')[0]?.value.toFixed(1)} м³/ч</td>
                                </tr>

                                <tr>
                                    <td>Выход с ОС</td>
                                    <td>{[...messages].pop()?.common.filter(obj => obj.name === 'water_consumption_out')[0]?.value.toFixed(1)} м³/ч</td>
                                </tr>

                                <tr>
                                    <td>ХПК на входе в ОС</td>
                                    <td>450 мг/дм³</td>
                                </tr>
                            </table>


                            <table className={styles.table} style={{borderBottom: '0'}}>
                                <tr>
                                    <th>Параметр</th>
                                    <th>Значение</th>
                                    <th>min</th>
                                    <th>max</th>
                                </tr>
                                <tr>
                                    <td>Средн. рассчит. потребн. в кислороде</td>
                                    <td>520 мг/дм³</td>
                                    <td>
                                        <InputNumber
                                            disabled
                                            defaultValue={400}
                                            style={{width: "50px"}}
                                            variant='borderless' min={0} max={2000}
                                        />
                                        <span>мг/дм³</span>
                                    </td>
                                    <td>
                                        <InputNumber
                                            disabled
                                            defaultValue={700}
                                            style={{width: "50px"}}
                                            variant='borderless' min={0} max={2000}
                                        />
                                        <span>мг/дм³</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Текущее потребление воздуха</td>
                                    <td colSpan={3}>{[...messages].pop()?.common.filter(obj => obj.name === 'air_consumption')[0]?.value.toFixed(1)} м³/
                                        1м³ сточных вод
                                    </td>
                                </tr>
                            </table>

                            <table className={styles.table} style={{borderBottom: '0'}}>
                                <tr>
                                    <th>Параметр</th>
                                    <th>Значение</th>
                                    <th>min</th>
                                    <th>max</th>
                                </tr>
                                <tr>
                                    <td>Текущее давление в трубопроводе</td>
                                    <td>520 кПа</td>
                                    <td>
                                        <InputNumber
                                            disabled
                                            defaultValue={400}
                                            style={{width: "50px"}}
                                            variant='borderless' min={0} max={2000}
                                        />
                                        <span>кПа</span>
                                    </td>
                                    <td>
                                        <InputNumber
                                            disabled
                                            defaultValue={700}
                                            style={{width: "50px"}}
                                            variant='borderless' min={0} max={2000}
                                        />
                                        <span>кПа</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Заданн. производит. воздуходувок</td>
                                    <td>25 %</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>

                            <table className={styles.table} style={{borderBottom: '0'}}>
                                <tr>
                                    <th>Параметр</th>
                                    <th>Значение</th>
                                </tr>
                                <tr>
                                    <td>Шаг регулирования</td>
                                    <td>5 %</td>
                                </tr>

                                <tr>
                                    <td>Частота регулированияк</td>
                                    <td>7 мин</td>
                                </tr>
                            </table>

                        </Form>

                        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "45px"}}>
                            <MainParameters/>
                            <Recycles/>
                            <DampersAirDucts/>
                            <OxygenConcSensors/>
                        </div>
                    </ConfigProvider>
                </div>
            </div>
        </>
    )
}

export default Data;
