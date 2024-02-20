import React, {useState} from 'react'
import {Badge, Collapse, ConfigProvider, Form, InputNumber, Switch, Tooltip} from "antd";
import styles from "../styles/Modules.module.css";
import {EditOutlined} from "@ant-design/icons";

const Recommendations = () => {


    const [isEdit, setIsEdit] = useState(false)

    const [tableValues, setTableValues] = useState({
        bbo1: {
            pH: {
                min: 6,
                max: 12
            },
            OVP: {
                max: 100
            },
            temp: {
                min: 5
            },
            avg_sludge_dose: {
                min: 10,
                max: 100
            },
            excess_sludge_level: {
                max: 100
            }
        },
        bbo2: {
            pH: {
                min: 6,
                max: 12
            },
            OVP: {
                max: 100
            },
            temp: {
                min: 5
            },
            avg_sludge_dose: {
                min: 10,
                max: 100
            },
            excess_sludge_level: {
                max: 100
            }
        },
        bbo3: {
            pH: {
                min: 6,
                max: 12
            },
            OVP: {
                max: 100
            },
            temp: {
                min: 5
            },
            avg_sludge_dose: {
                min: 10,
                max: 100
            },
            excess_sludge_level: {
                max: 100
            }
        },
        bbo4: {
            pH: {
                min: 6,
                max: 12
            },
            OVP: {
                max: 100
            },
            temp: {
                min: 5
            },
            avg_sludge_dose: {
                min: 10,
                max: 100
            },
            excess_sludge_level: {
                max: 100
            }
        },
        max_flow_rate: 1000,
        max_xpk: 1000,
        duration_xpk: 7
    })

    //const messages = useRecoilValue(messagesAtom);

    const messages = [
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

    const getValue = (bbo, name) => {
        switch (bbo) {
            case 1:
                return [...messages].pop().bbo1.filter(obj => obj.name === name)[0]?.value.toFixed(1)
            case 2:
                return [...messages].pop().bbo2.filter(obj => obj.name === name)[0]?.value.toFixed(1)
            case 3:
                return [...messages].pop().bbo3.filter(obj => obj.name === name)[0]?.value.toFixed(1)
            case 4:
                return [...messages].pop().bbo4.filter(obj => obj.name === name)[0]?.value.toFixed(1)
            case 'common':
                return [...messages].pop().common.filter(obj => obj.name === name)[0]?.value.toFixed(1)
            default:
                return '–'
        }

    }

    return (
        <ConfigProvider theme={{
            token: {
                fontFamily: "Euclid Circular A",
            }
        }}>
            <Form className={styles.form} onFinish={(values) => {
                console.log(values)
            }}>
                <div className={styles.container}>
                    <div className={styles.tableContainer} style={{maxWidth: '800px'}}>
                        <table className={styles.table} style={{borderBottom: '0'}}>
                            <tr>
                                <th colSpan={5}>Текущие значения</th>
                            </tr>
                            <tr>
                                <th>Название параметра</th>
                                <th>ББО 1</th>
                                <th>ББО 2</th>
                                <th>ББО 3</th>
                                <th>ББО 4</th>
                            </tr>
                            <tr>
                                <td>pH</td>
                                <td>
                                    {
                                        !(tableValues.bbo1.pH.min < getValue(1, 'acidity')
                                            && tableValues.bbo1.pH.max > getValue(1, 'acidity')) ?
                                            <Tooltip
                                                title="Необходимо провести обследование на наличие сброса  сточных вод от промышленных предприятий, при возможности запустить резервный осветлитель-перегниватель">
                                                <Badge dot>
                                                    {getValue(1, 'acidity')}
                                                </Badge>
                                            </Tooltip> :
                                            <>{getValue(1, 'acidity')}</>
                                    }
                                </td>
                                <td>
                                    {
                                        !(tableValues.bbo2.pH.min < getValue(2, 'acidity')
                                            && tableValues.bbo2.pH.max > getValue(2, 'acidity')) ?
                                            <Tooltip
                                                title="Необходимо провести обследование на наличие сброса  сточных вод от промышленных предприятий, при возможности запустить резервный осветлитель-перегниватель">
                                                <Badge dot>
                                                    {getValue(2, 'acidity')}
                                                </Badge>
                                            </Tooltip> :
                                            <>{getValue(2, 'acidity')}</>
                                    }
                                </td>
                                <td>{
                                    !(tableValues.bbo3.pH.min < getValue(3, 'acidity')
                                        && tableValues.bbo3.pH.max > getValue(3, 'acidity')) ?
                                        <Tooltip
                                            title="Необходимо провести обследование на наличие сброса  сточных вод от промышленных предприятий, при возможности запустить резервный осветлитель-перегниватель">
                                            <Badge dot>
                                                {getValue(3, 'acidity')}
                                            </Badge>
                                        </Tooltip> :
                                        <>{getValue(3, 'acidity')}</>
                                }</td>
                                <td>{
                                    !(tableValues.bbo4.pH.min < getValue(4, 'acidity')
                                        && tableValues.bbo4.pH.max > getValue(4, 'acidity')) ?
                                        <Tooltip
                                            title="Необходимо провести обследование на наличие сброса  сточных вод от промышленных предприятий, при возможности запустить резервный осветлитель-перегниватель">
                                            <Badge dot>
                                                {getValue(4, 'acidity')}
                                            </Badge>
                                        </Tooltip> :
                                        <>{getValue(4, 'acidity')}</>
                                }</td>
                            </tr>

                            <tr>
                                <td>ОВП</td>
                                <td>
                                    {
                                        !(tableValues.bbo1.OVP.max > getValue(1, 'OVP')) ?
                                            <Tooltip
                                                title="Возможно идет сброс сточных вод от промышленных промпредприятий, отобрать анализы на входе">
                                                <Badge dot>
                                                    {getValue(1, 'OVP')}
                                                </Badge>
                                            </Tooltip> :
                                            <>{getValue(1, 'OVP')}</>
                                    }
                                </td>
                                <td>
                                    {
                                        !(tableValues.bbo2.OVP.max > getValue(2, 'OVP')) ?
                                            <Tooltip
                                                title="Возможно идет сброс сточных вод от промышленных промпредприятий, отобрать анализы на входе">
                                                <Badge dot>
                                                    {getValue(2, 'OVP')}
                                                </Badge>
                                            </Tooltip> :
                                            <>{getValue(2, 'OVP')}</>
                                    }
                                </td>
                                <td>
                                    {
                                        !(tableValues.bbo3.OVP.max > getValue(3, 'OVP')) ?
                                            <Tooltip
                                                title="Возможно идет сброс сточных вод от промышленных промпредприятий, отобрать анализы на входе">
                                                <Badge dot>
                                                    {getValue(3, 'OVP')}
                                                </Badge>
                                            </Tooltip> :
                                            <>{getValue(3, 'OVP')}</>
                                    }
                                </td>
                                <td>
                                    {
                                        !(tableValues.bbo4.OVP.max > getValue(4, 'OVP')) ?
                                            <Tooltip
                                                title="Возможно идет сброс сточных вод от промышленных промпредприятий, отобрать анализы на входе">
                                                <Badge dot>
                                                    {getValue(4, 'OVP')}
                                                </Badge>
                                            </Tooltip> :
                                            <>{getValue(4, 'OVP')}</>
                                    }
                                </td>
                            </tr>

                            <tr>
                                <td>Температура, °С</td>
                                <td>
                                    {
                                        !(tableValues.bbo1.temp.min < getValue(1, 'temperature')) ?
                                            <Tooltip
                                                title="Необходимо обратить внимание на интенсивность процесса денитрификации">
                                                <Badge dot>
                                                    {getValue(1, 'temperature')}
                                                </Badge>
                                            </Tooltip> :
                                            <>{getValue(1, 'temperature')}</>
                                    }
                                </td>
                                <td>
                                    {
                                        !(tableValues.bbo2.temp.min < getValue(2, 'temperature')) ?
                                            <Tooltip
                                                title="Необходимо обратить внимание на интенсивность процесса денитрификации">
                                                <Badge dot>
                                                    {getValue(2, 'temperature')}
                                                </Badge>
                                            </Tooltip> :
                                            <>{getValue(2, 'temperature')}</>
                                    }
                                </td>
                                <td>
                                    {/*{*/}
                                    {/*    !(tableValues.bbo3.temp.min < getValue(3, 'temperature')) ?*/}
                                    {/*        <Tooltip*/}
                                    {/*            title="Необходимо обратить внимание на интенсивность процесса денитрификации">*/}
                                    {/*            <Badge dot>*/}
                                    {/*                {getValue(3, 'temperature')}*/}
                                    {/*            </Badge>*/}
                                    {/*        </Tooltip> :*/}
                                    {/*        <>{getValue(3, 'temperature')}</>*/}
                                    {/*}*/}
                                </td>
                                <td>
                                    {/*{*/}
                                    {/*    !(tableValues.bbo4.temp.min < getValue(4, 'temperature')) ?*/}
                                    {/*        <Tooltip*/}
                                    {/*            title="Необходимо обратить внимание на интенсивность процесса денитрификации">*/}
                                    {/*            <Badge dot>*/}
                                    {/*                {getValue(4, 'temperature')}*/}
                                    {/*            </Badge>*/}
                                    {/*        </Tooltip> :*/}
                                    {/*        <>{getValue(4, 'temperature')}</>*/}
                                    {/*}*/}
                                </td>
                            </tr>

                            <tr>
                                <td>Доза ила в биоблоке, г/дм³</td>
                                <td>–</td>
                                <td>–</td>
                                <td>–</td>
                                <td>–</td>
                            </tr>

                            <tr>
                                <td>Уровень ила</td>
                                <td>
                                    {
                                        !(tableValues.bbo1.excess_sludge_level.max > getValue(1, 'silt_level')) ?
                                            <Tooltip
                                                title="Высокий уровень избыточного ила во вторичном отстойнике ББО № 1. Обеспечьте удаление избыточного ила">
                                                <Badge dot>
                                                    {getValue(1, 'silt_level')}
                                                </Badge>
                                            </Tooltip> :
                                            <>{getValue(1, 'silt_level')}</>
                                    }
                                </td>
                                <td>
                                    {
                                        !(tableValues.bbo2.excess_sludge_level.max > getValue(2, 'silt_level')) ?
                                            <Tooltip
                                                title="Высокий уровень избыточного ила во вторичном отстойнике ББО № 2. Обеспечьте удаление избыточного ила">
                                                <Badge dot>
                                                    {getValue(2, 'silt_level')}
                                                </Badge>
                                            </Tooltip> :
                                            <>{getValue(2, 'silt_level')}</>
                                    }
                                </td>
                                <td>
                                    {
                                        !(tableValues.bbo3.excess_sludge_level.max > getValue(3, 'silt_level')) ?
                                            <Tooltip
                                                title="Высокий уровень избыточного ила во вторичном отстойнике ББО № 3. Обеспечьте удаление избыточного ила">
                                                <Badge dot>
                                                    {getValue(3, 'silt_level')}
                                                </Badge>
                                            </Tooltip> :
                                            <>{getValue(3, 'silt_level')}</>
                                    }
                                </td>
                                <td>
                                    {
                                        !(tableValues.bbo4.excess_sludge_level.max > getValue(4, 'silt_level')) ?
                                            <Tooltip
                                                title="Высокий уровень избыточного ила во вторичном отстойнике ББО № 4. Обеспечьте удаление избыточного ила">
                                                <Badge dot>
                                                    {getValue(4, 'silt_level')}
                                                </Badge>
                                            </Tooltip> :
                                            <>{getValue(4, 'silt_level')}</>
                                    }
                                </td>
                            </tr>

                            <tr>
                                <th colSpan={5}>Общие</th>
                            </tr>

                            <tr>
                                <td>Расход воды, м³/ч</td>
                                <td colSpan={4}>
                                    {
                                        !(tableValues.max_flow_rate > getValue('common', 'water_consumption_in')) ?
                                            <Tooltip
                                                title="Высокий уровень избыточного ила во вторичном отстойнике ББО № 1. Обеспечьте удаление избыточного ила">
                                                <Badge dot>
                                                    {getValue('common', 'water_consumption_in')}
                                                </Badge>
                                            </Tooltip> :
                                            <>{getValue('common', 'water_consumption_in')}</>
                                    }
                                </td>
                            </tr>

                            <tr>
                                <td>Датчик углерода (ХПК)</td>
                                <td colSpan={4}>
                                    {
                                        !(tableValues.max_flow_rate > 0) ?
                                            <Tooltip
                                                title="Высокий уровень избыточного ила во вторичном отстойнике ББО № 1. Обеспечьте удаление избыточного ила">
                                                <Badge dot>
                                                    0
                                                </Badge>
                                            </Tooltip> :
                                            <>0</>
                                    }
                                </td>
                            </tr>
                        </table>

                        <ConfigProvider theme={{
                            components: {
                                Collapse: {
                                    contentPadding: 0,
                                    borderRadiusLG: 0,
                                    colorBorder: '#f0f0f0'
                                },
                            },
                        }}>
                            <Collapse
                                style={{border: '1px solid #f0f0f0'}}
                                items={[{
                                    key: '1', label: 'Настройка рекомендаций', children:
                                        <table className={styles.tableInner}>
                                            <tr>
                                                <th rowSpan={2}>Название параметра</th>
                                                <th colSpan={2}>ББО 1</th>
                                                <th colSpan={2}>ББО 2</th>
                                                <th colSpan={2}>ББО 3</th>
                                                <th colSpan={2}>ББО 4</th>
                                            </tr>

                                            <tr>
                                                <th>min</th>
                                                <th>max</th>

                                                <th>min</th>
                                                <th>max</th>

                                                <th>min</th>
                                                <th>max</th>

                                                <th>min</th>
                                                <th>max</th>
                                            </tr>

                                            <tr>
                                                <td>Границы значения pH, min и max</td>

                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo1.pH.min}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo1:
                                                                {
                                                                    ...prev.bbo1,
                                                                    pH: {
                                                                        ...prev.bbo1.pH,
                                                                        min: e,
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>
                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo1.pH.max}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo1:
                                                                {
                                                                    ...prev.bbo1,
                                                                    pH: {
                                                                        ...prev.bbo1.pH,
                                                                        max: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>

                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo2.pH.min}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo2:
                                                                {
                                                                    ...prev.bbo2,
                                                                    pH: {
                                                                        ...prev.bbo2.pH,
                                                                        min: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>
                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo2.pH.max}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo2:
                                                                {
                                                                    ...prev.bbo2,
                                                                    pH: {
                                                                        ...prev.bbo2.pH,
                                                                        max: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>

                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo3.pH.min}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo3:
                                                                {
                                                                    ...prev.bbo3,
                                                                    pH: {
                                                                        ...prev.bbo3.pH,
                                                                        min: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>
                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo3.pH.max}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo3:
                                                                {
                                                                    ...prev.bbo3,
                                                                    pH: {
                                                                        ...prev.bbo3.pH,
                                                                        max: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>

                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo4.pH.min}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo4:
                                                                {
                                                                    ...prev.bbo4,
                                                                    pH: {
                                                                        ...prev.bbo4.pH,
                                                                        min: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>
                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo4.pH.max}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo4:
                                                                {
                                                                    ...prev.bbo4,
                                                                    pH: {
                                                                        ...prev.bbo4.pH,
                                                                        max: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Значение ОВП, max</td>

                                                <td>–</td>
                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo1.OVP.max}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo1:
                                                                {
                                                                    ...prev.bbo1,
                                                                    OVP: {
                                                                        max: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>

                                                <td>–</td>
                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo2.OVP.max}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo2:
                                                                {
                                                                    ...prev.bbo2,
                                                                    OVP: {
                                                                        max: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>

                                                <td>–</td>
                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo3.OVP.max}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo3:
                                                                {
                                                                    ...prev.bbo3,
                                                                    OVP: {
                                                                        max: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>

                                                <td>–</td>
                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo4.OVP.max}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo4:
                                                                {
                                                                    ...prev.bbo4,
                                                                    OVP: {
                                                                        max: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Значение температуры сточных вод, min</td>

                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo1.temp.min}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo1:
                                                                {
                                                                    ...prev.bbo1,
                                                                    temp: {
                                                                        min: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>
                                                <td>–</td>

                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo2.temp.min}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo2:
                                                                {
                                                                    ...prev.bbo2,
                                                                    temp: {
                                                                        min: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>
                                                <td>–</td>

                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo3.temp.min}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo3:
                                                                {
                                                                    ...prev.bbo3,
                                                                    temp: {
                                                                        min: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>
                                                <td>–</td>

                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo4.temp.min}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo4:
                                                                {
                                                                    ...prev.bbo4,
                                                                    temp: {
                                                                        min: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>
                                                <td>–</td>
                                            </tr>

                                            <tr>
                                                <td>Среднее значение дозы ила, min и max</td>

                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo1.avg_sludge_dose.min}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo1:
                                                                {
                                                                    ...prev.bbo1,
                                                                    avg_sludge_dose: {
                                                                        ...prev.bbo1.avg_sludge_dose,
                                                                        min: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>
                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo1.avg_sludge_dose.max}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo1:
                                                                {
                                                                    ...prev.bbo1,
                                                                    avg_sludge_dose: {
                                                                        ...prev.bbo1.avg_sludge_dose,
                                                                        max: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>

                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo2.avg_sludge_dose.min}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo2:
                                                                {
                                                                    ...prev.bbo2,
                                                                    avg_sludge_dose: {
                                                                        ...prev.bbo2.avg_sludge_dose,
                                                                        min: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>
                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo2.avg_sludge_dose.max}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo2:
                                                                {
                                                                    ...prev.bbo2,
                                                                    avg_sludge_dose: {
                                                                        ...prev.bbo2.avg_sludge_dose,
                                                                        max: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>

                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo3.avg_sludge_dose.min}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo3:
                                                                {
                                                                    ...prev.bbo3,
                                                                    avg_sludge_dose: {
                                                                        ...prev.bbo3.avg_sludge_dose,
                                                                        min: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>
                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo3.avg_sludge_dose.max}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo3:
                                                                {
                                                                    ...prev.bbo3,
                                                                    avg_sludge_dose: {
                                                                        ...prev.bbo3.avg_sludge_dose,
                                                                        max: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>

                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo4.avg_sludge_dose.min}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo4:
                                                                {
                                                                    ...prev.bbo4,
                                                                    avg_sludge_dose: {
                                                                        ...prev.bbo4.avg_sludge_dose,
                                                                        min: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>
                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo4.avg_sludge_dose.max}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo4:
                                                                {
                                                                    ...prev.bbo4,
                                                                    avg_sludge_dose: {
                                                                        ...prev.bbo4.avg_sludge_dose,
                                                                        max: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Уровень избыточного ила во вторичном отстойнике, max</td>

                                                <td>–</td>
                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo1.excess_sludge_level.max}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo1:
                                                                {
                                                                    ...prev.bbo1,
                                                                    excess_sludge_level: {
                                                                        max: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>

                                                <td>–</td>
                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo2.excess_sludge_level.max}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo2:
                                                                {
                                                                    ...prev.bbo2,
                                                                    excess_sludge_level: {
                                                                        max: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>

                                                <td>–</td>
                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo3.excess_sludge_level.max}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo3:
                                                                {
                                                                    ...prev.bbo3,
                                                                    excess_sludge_level: {
                                                                        max: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>

                                                <td>–</td>
                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.bbo4.excess_sludge_level.max}
                                                        style={{width: "50px"}}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev, bbo4:
                                                                {
                                                                    ...prev.bbo4,
                                                                    excess_sludge_level: {
                                                                        max: e
                                                                    }
                                                                }
                                                        }))}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <th colSpan={9}>Общие</th>
                                            </tr>

                                            <tr>
                                                <th colSpan={1}>Название параметра</th>
                                                <th colSpan={8}>Ограничение</th>
                                            </tr>

                                            <tr>
                                                <td>Максимальный входящий расход</td>
                                                <td colSpan={8}>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.max_flow_rate}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev,
                                                            max_flow_rate: e
                                                        }))}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Максимальное значение ХПК на входе в ОС</td>
                                                <td colSpan={8}>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.max_xpk}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev,
                                                            max_xpk: e
                                                        }))}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Продолжительность поступления сточных вод с мах ХПК, ч</td>
                                                <td colSpan={8}>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.duration_xpk}
                                                        variant='borderless' min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({
                                                            ...prev,
                                                            duration_xpk: e
                                                        }))}
                                                    />
                                                </td>
                                            </tr>

                                        </table>,
                                    extra: <Switch
                                        checkedChildren={
                                            <EditOutlined/>
                                        }
                                        onChange={(checked, e) => {
                                            e.stopPropagation()
                                            setIsEdit(prev => !prev)
                                            console.log(checked)
                                        }}/>
                                }]}
                            />
                        </ConfigProvider>
                    </div>
                </div>
            </Form>
        </ConfigProvider>
    )
}

export default Recommendations
