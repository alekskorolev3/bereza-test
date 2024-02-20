import React, {useEffect, useState} from 'react'
import styles from '../../styles/MainParameters.module.css'
import {Table} from "antd";
import {useRecoilValue} from "recoil";
import {messagesAtom} from "../../state/messages";

const Recycles = () => {
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

        return [
            {
                key: '1',
                number: '1',
                name: 'Нитратный рецикл',
                bbo_1: '–',
                bbo_2: '–',
                bbo_3: '–',
                bbo_4: '–',
                children: [
                    {
                        key: '2',
                        number: '1.1',
                        name: '– производительность, %',
                        bbo_1: '–',
                        bbo_2: '–',
                        bbo_3: '–',
                        bbo_4: '–'
                    },
                    {
                        key: '3',
                        number: '1.2',
                        name: '– % открытия затвора',
                        bbo_1: '–',
                        bbo_2: '–',
                        bbo_3: '–',
                        bbo_4: '–'
                    },
                ]
            },
            {
                key: '4',
                number: '2',
                name: 'Рецикл из в/о',
                bbo_1: '–',
                bbo_2: '–',
                bbo_3: '–',
                bbo_4: '–',
                children: [
                    {
                        key: '5',
                        number: '2.1',
                        name: '– производительность, %',
                        bbo_1: '–',
                        bbo_2: '–',
                        bbo_3: '–',
                        bbo_4: '–'
                    },
                    {
                        key: '6',
                        number: '2.2',
                        name: '– % открытия затвора',
                        bbo_1: '–',
                        bbo_2: '–',
                        bbo_3: '–',
                        bbo_4: '–'
                    },
                ]
            },

            {
                key: '7',
                number: '3',
                name: 'Рецикл из в/о 2',
                bbo_1: '–',
                bbo_2: '–',
                bbo_3: '–',
                bbo_4: '–',
                children: [
                    {
                        key: '8',
                        number: '3.1',
                        name: '– производительность, %',
                        bbo_1: '–',
                        bbo_2: '–',
                        bbo_3: '–',
                        bbo_4: '–'
                    },
                    {
                        key: '9',
                        number: '3.2',
                        name: '– % открытия затвора',
                        bbo_1: '–',
                        bbo_2: '–',
                        bbo_3: '–',
                        bbo_4: '–'
                    },
                ]
            },

            {
                key: '10',
                number: '4',
                name: 'Анаэробный рецикл',
                bbo_1: '–',
                bbo_2: '–',
                bbo_3: '–',
                bbo_4: '–',
                children: [
                    {
                        key: '11',
                        number: '4.1',
                        name: '– производительность, %',
                        bbo_1: '–',
                        bbo_2: '–',
                        bbo_3: '–',
                        bbo_4: '–'
                    },
                    {
                        key: '12',
                        number: '4.2',
                        name: '– % открытия затвора',
                        bbo_1: '–',
                        bbo_2: '–',
                        bbo_3: '–',
                        bbo_4: '–'
                    },
                ]
            }
        ];
    }
    const defaultColumns = [
        {
            title: '№ п/п',
            dataIndex: 'number',
            key: 'number',
            align: 'left'
        },
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
            align: 'left'
        },
        {
            key: 'bbo_1',
            title: 'ББО 1',
            dataIndex: 'bbo_1',
        },
        {
            key: 'bbo_2',
            title: 'ББО 2',
            dataIndex: 'bbo_2',
        },
        {
            key: 'bbo_3',
            title: 'ББО 3',
            dataIndex: 'bbo_3',
        },
        {
            key: 'bbo_4',
            title: 'ББО 4',
            dataIndex: 'bbo_4',
        },
    ]

    return (
        <div className={styles.oxygenConcSensorsContainer}>
            <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                <h3 className={styles.title}>Состояние рециклов</h3>
                <span style={{display: "flex", alignItems: "center", gap: "5px"}}>
                    <img src="/dateIcon.svg" alt="dateIcon" style={{width: "20px"}}/>
                    <span
                        style={{fontSize: "12px"}}
                    >{!(messages.length !== 0 && [...messages].pop()?.status !== "connected") ? 'Подключение' : [...messages].pop()?.bbo1[0]?.time}</span>
                </span>
            </div>
            <Table
                style={{width: "100%"}}
                size='small'
                loading={!(messages.length !== 0 && [...messages].pop()?.status !== "connected")}
                columns={defaultColumns}
                dataSource={initialData} bordered pagination={false}/>
        </div>
    )
}

export default Recycles
