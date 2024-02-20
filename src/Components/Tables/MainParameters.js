import React, {useEffect, useState} from 'react'
import styles from '../../styles/MainParameters.module.css'
import {Table} from "antd";
import {useRecoilValue} from "recoil";
import {messagesAtom} from "../../state/messages";

const MainParameters = () => {

    const [initialData, setInitialData] = useState([])

    useEffect(() => {
        setInitialData(convertToTable([...messages].pop()))
    }, [])

    const messages = useRecoilValue(messagesAtom);

    const messages2 = [{
        "bbo1": [{
            "name": "oxygen",
            "value": 0.48856809735298157,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:16",
            "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0440\u043e\u0434",
            "bbo_id": 1
        }, {
            "name": "valve_4",
            "value": 27.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:13",
            "rus_name": "\u0417\u0430\u0434\u0432\u0438\u0436\u043a\u0430 4",
            "bbo_id": 1
        }, {
            "name": "valve_3",
            "value": 21.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:11",
            "rus_name": "\u0417\u0430\u0434\u0432\u0438\u0436\u043a\u0430 3",
            "bbo_id": 1
        }, {
            "name": "valve_2",
            "value": 61.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:09",
            "rus_name": "\u0417\u0430\u0434\u0432\u0438\u0436\u043a\u0430 2",
            "bbo_id": 1
        }, {
            "name": "valve_1",
            "value": 47.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:07",
            "rus_name": "\u0417\u0430\u0434\u0432\u0438\u0436\u043a\u0430 1",
            "bbo_id": 1
        }, {
            "name": "OVP",
            "value": -56.45991516113281,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:05",
            "rus_name": "\u041e\u0412\u041f",
            "bbo_id": 1
        }, {
            "name": "silt_level",
            "value": 6.101797103881836,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:25:57",
            "rus_name": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0438\u043b\u0430",
            "bbo_id": 1
        }, {
            "name": "temperature",
            "value": 15.57982063293457,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:25:55",
            "rus_name": "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
            "bbo_id": 1
        }, {
            "name": "acidity",
            "value": 1.7891581058502197,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:25:53",
            "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c",
            "bbo_id": 1
        }, {
            "name": "turbidity",
            "value": 3.112539529800415,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:25:51",
            "rus_name": "\u041c\u0443\u0442\u043d\u043e\u0441\u0442\u044c",
            "bbo_id": 1
        }, {
            "name": "oxygen",
            "value": 0.5206586122512817,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:23:32",
            "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0440\u043e\u0434",
            "bbo_id": 1
        }, {
            "name": "valve_4",
            "value": 27.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:23:30",
            "rus_name": "\u0417\u0430\u0434\u0432\u0438\u0436\u043a\u0430 4",
            "bbo_id": 1
        }],
        "bbo2": [{
            "name": "silt_level",
            "value": 1.363417148590088,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:30",
            "rus_name": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0438\u043b\u0430",
            "bbo_id": 2
        }, {
            "name": "temperature",
            "value": 13.175764083862305,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:28",
            "rus_name": "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
            "bbo_id": 2
        }, {
            "name": "OVP",
            "value": -486.0000305175781,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:26",
            "rus_name": "\u041e\u0412\u041f",
            "bbo_id": 2
        }, {
            "name": "acidity",
            "value": 7.572760581970215,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:24",
            "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c",
            "bbo_id": 2
        }, {
            "name": "oxygen",
            "value": 0.8508579134941101,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:22",
            "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0440\u043e\u0434",
            "bbo_id": 2
        }],
        "bbo3": [{
            "name": "silt_level",
            "value": 1.584166407585144,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:41",
            "rus_name": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0438\u043b\u0430",
            "bbo_id": 3
        }, {
            "name": "oxygen",
            "value": 0.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:39",
            "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0440\u043e\u0434",
            "bbo_id": 3
        }, {
            "name": "turbidity",
            "value": 0.03075990080833435,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:36",
            "rus_name": "\u041c\u0443\u0442\u043d\u043e\u0441\u0442\u044c",
            "bbo_id": 3
        }, {
            "name": "acidity",
            "value": 6.647162914276123,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:34",
            "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c",
            "bbo_id": 3
        }, {
            "name": "OVP",
            "value": -444.6999816894531,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:32",
            "rus_name": "\u041e\u0412\u041f",
            "bbo_id": 3
        }],
        "bbo4": [{
            "name": "silt_level",
            "value": 0.6844797134399414,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:51",
            "rus_name": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0438\u043b\u0430",
            "bbo_id": 4
        }, {
            "name": "oxygen",
            "value": 0.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:49",
            "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0440\u043e\u0434",
            "bbo_id": 4
        }, {
            "name": "turbidity",
            "value": 6.840012073516846,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:47",
            "rus_name": "\u041c\u0443\u0442\u043d\u043e\u0441\u0442\u044c",
            "bbo_id": 4
        }, {
            "name": "acidity",
            "value": 6.610671520233154,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:45",
            "rus_name": "\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c",
            "bbo_id": 4
        }, {
            "name": "OVP",
            "value": -450.1000061035156,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "08.02.2024 12:26:43",
            "rus_name": "\u041e\u0412\u041f",
            "bbo_id": 4
        }]
    }]


    const convertToTable = (data) => {

        let bbo1 = {
            key: '1',
            number: '1',
        }

        let bbo2 = {
            key: '2',
            number: '2',
        }

        let bbo3 = {
            key: '3',
            number: '3',
        }

        let bbo4 = {
            key: '4',
            number: '4',
        }

        data?.bbo1?.map((obj) => {
            switch (obj.name) {
                case 'turbidity':
                    bbo1.turbidity = obj.value.toFixed(1)
                    break
                case 'silt_level':
                    bbo1.silt_level = obj.value.toFixed(1)
                    break
                case 'acidity':
                    bbo1.pH = obj.value.toFixed(1)
                    break
                case 'temperature':
                    bbo1.temp = obj.value.toFixed(1)
                    break
                case 'OVP':
                    bbo1.OVP = obj.value.toFixed(1)
                    break
                default:
                    break
            }
        })

        data?.bbo2?.map((obj) => {
            switch (obj.name) {
                case 'turbidity':
                    bbo2.turbidity = obj.value.toFixed(1)
                    break
                case 'silt_level':
                    bbo2.silt_level = obj.value.toFixed(1)
                    break
                case 'acidity':
                    bbo2.pH = obj.value.toFixed(1)
                    break
                case 'temperature':
                    bbo2.temp = obj.value.toFixed(1)
                    break
                case 'OVP':
                    bbo2.OVP = obj.value.toFixed(1)
                    break
                default:
                    break
            }
        })

        data?.bbo3?.map((obj) => {
            switch (obj.name) {
                case 'turbidity':
                    bbo3.turbidity = obj.value.toFixed(1)
                    break
                case 'silt_level':
                    bbo3.silt_level = obj.value.toFixed(1)
                    break
                case 'acidity':
                    bbo3.pH = obj.value.toFixed(1)
                    break
                case 'temperature':
                    bbo3.temp = obj.value.toFixed(1)
                    break
                case 'OVP':
                    bbo3.OVP = obj.value.toFixed(1)
                    break
                default:
                    break
            }
        })

        data?.bbo4?.map((obj) => {
            switch (obj.name) {
                case 'turbidity':
                    bbo4.turbidity = obj.value.toFixed(1)
                    break
                case 'silt_level':
                    bbo4.silt_level = obj.value.toFixed(1)
                    break
                case 'acidity':
                    bbo4.pH = obj.value.toFixed(1)
                    break
                case 'temperature':
                    bbo4.temp = obj.value.toFixed(1)
                    break
                case 'OVP':
                    bbo4.OVP = obj.value.toFixed(1)
                    break
                default:
                    break
            }
        })

        return [bbo1, bbo2, bbo3, bbo4]
    }

    const defaultColumns = [
        {
            title: '№ ББО',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Уровень ила, м',
            dataIndex: 'silt_level',
            key: 'silt_level',
        },
        {
            key: 'turbidity',
            title: 'Доза ила, г/л',
            dataIndex: 'turbidity',
        },
        {
            key: 'pH',
            title: 'Кислотность, pH',
            dataIndex: 'pH',
        },
        {
            key: 'temp',
            title: 'Температура, °С',
            dataIndex: 'temp',
        },
        {
            key: 'OVP',
            title: 'ОВП, мВ',
            dataIndex: 'OVP',
        }
    ]

    return (
        <div className={styles.oxygenConcSensorsContainer} style={{width: "100%"}}>
            <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                <h3 className={styles.title}>Онлайн-значения</h3>
                <span style={{display: "flex", alignItems: "center", gap: "5px"}}>
                    <img src="/dateIcon.svg" alt="dateIcon" style={{width: "20px"}}/>
                    <span
                        style={{fontSize: "12px"}}
                    >{!(messages.length !== 0 && [...messages].pop()?.status !== "connected") ? 'Подключение' : [...messages].pop()?.bbo1[0]?.time}</span>
                </span>
            </div>
            <Table
                style={{width: "100%"}}
                loading={!(messages.length !== 0 && [...messages].pop()?.status !== "connected")}
                size='small'
                columns={defaultColumns}
                dataSource={initialData} bordered pagination={false}/>
        </div>
    )
}

export default MainParameters
