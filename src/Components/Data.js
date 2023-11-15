import styles from "../styles/Data.module.css"
import {useRecoilValue, useSetRecoilState} from "recoil";
import {messagesAtom} from "../state/messages";

const W3CWebSocket = require('websocket').w3cwebsocket;

const client = new W3CWebSocket('ws://192.168.1.136:8000/ws/socket-server/');

function Data() {

    const messages = useRecoilValue(messagesAtom);
    const setMessages = useSetRecoilState(messagesAtom);

    // let object = {
    //     "bbo": "BBO1",
    //     "data": [{
    //         "name": "valve_4",
    //         "value": 27.0,
    //         "is_main": true,
    //         "is_masked": false,
    //         "is_ready": true,
    //         "is_accident": false,
    //         "time": "20.10.2023 14:47:08",
    //         "bbo_id": 1
    //     }, {
    //         "name": "valve_3",
    //         "value": 20.0,
    //         "is_main": true,
    //         "is_masked": false,
    //         "is_ready": true,
    //         "is_accident": false,
    //         "time": "20.10.2023 14:47:06",
    //         "bbo_id": 1
    //     }, {
    //         "name": "valve_2",
    //         "value": 56.0,
    //         "is_main": true,
    //         "is_masked": false,
    //         "is_ready": true,
    //         "is_accident": false,
    //         "time": "20.10.2023 14:47:03",
    //         "bbo_id": 1
    //     }, {
    //         "name": "valve_1",
    //         "value": 38.0,
    //         "is_main": true,
    //         "is_masked": false,
    //         "is_ready": true,
    //         "is_accident": false,
    //         "time": "20.10.2023 14:47:00",
    //         "bbo_id": 1
    //     }, {
    //         "name": "OVP",
    //         "value": -71.72347259521484,
    //         "is_main": true,
    //         "is_masked": false,
    //         "is_ready": true,
    //         "is_accident": false,
    //         "time": "20.10.2023 14:46:57",
    //         "bbo_id": 1
    //     }, {
    //         "name": "silt_level",
    //         "value": 7.628886699676514,
    //         "is_main": true,
    //         "is_masked": false,
    //         "is_ready": true,
    //         "is_accident": false,
    //         "time": "20.10.2023 14:46:54",
    //         "bbo_id": 1
    //     }, {
    //         "name": "temperature",
    //         "value": 20.742000579833984,
    //         "is_main": true,
    //         "is_masked": false,
    //         "is_ready": true,
    //         "is_accident": false,
    //         "time": "20.10.2023 14:46:50",
    //         "bbo_id": 1
    //     }, {
    //         "name": "acidity",
    //         "value": 7.4012556076049805,
    //         "is_main": true,
    //         "is_masked": false,
    //         "is_ready": true,
    //         "is_accident": false,
    //         "time": "20.10.2023 14:46:48",
    //         "bbo_id": 1
    //     }, {
    //         "name": "turbidity",
    //         "value": 1.987699031829834,
    //         "is_main": true,
    //         "is_masked": false,
    //         "is_ready": true,
    //         "is_accident": false,
    //         "time": "20.10.2023 14:46:45",
    //         "bbo_id": 1
    //     }],
    //     "action": "create"
    // }

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
