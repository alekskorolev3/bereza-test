import React, {useState} from 'react'
import styles from "../styles/Data.module.css";
import {ConfigProvider, Switch, Tooltip} from "antd";
import {useRecoilValue} from "recoil";
import {messagesAtom} from "../state/messages";


const TechSchema = () => {

    const [switchValue, setSwitchValue] = useState({checked: false, value: '27,3 м³/ч'})

    const mockData2 = [
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

    const mockData = useRecoilValue(messagesAtom);


    console.log(mockData)

    console.log([...mockData].pop()?.bbo1)
    return (
        <div className={styles.container} style={{height: "fit-content"}}>
            <div className={`${styles.imgContainer} ${switchValue.checked ? styles.imgOn : styles.imgOff}`}>


                <div className={styles.paramGroup + ' ' + styles.xpkIn}>
                    <span className={styles.param} style={{width: '4vw'}}>
                        970.7 мг/л
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.sandTrapsEntry}>
                    <span className={styles.param} style={{width: '4.2vw'}}>
                        {
                            [...mockData].pop()?.common.find((val) => val.name === 'water_consumption_in') ? `${ [...mockData].pop()?.common.find((val) => val.name === 'water_consumption_in').value.toFixed(1)} м³/ч` : '– м³/ч'
                        }
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.siltPlatforms}>
                    <span className={styles.param} style={{width: '4vw'}}>
                        {
                            !switchValue.checked ? switchValue.value : '0 м³/ч'
                        }
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.siltPlatformsSwitch}>
                    <ConfigProvider theme={{
                        token: {
                            fontFamily: "Euclid Circular A",
                            colorPrimary: '#00A3E7'
                        }
                    }}>
                        <Tooltip title={switchValue.checked ? 'Откачка ИАИ и СО на распред. чашу' : 'Откачка ИАИ и СО на иловые площадки'} color='#1F4458'>
                            <Switch size='small'
                                    onChange={(e) => setSwitchValue(prev => ({...prev, checked: !prev.checked}))}/>
                        </Tooltip>
                    </ConfigProvider>

                </div>

                <div className={styles.paramGroup + ' ' + styles.siltPlatforms2}>
                    <span className={styles.param} style={{width: '4vw'}}>
                        {
                            switchValue.checked ? switchValue.value : '0 м³/ч'
                        }
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.siltPumpStation}>
                    <span className={styles.param}>
                        2.2 м
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.blowerStation}>
                    <span className={styles.param} style={{width: '4vw'}}>
                        0.2 Т/ч
                    </span>
                    <span className={styles.param} style={{width: '4vw'}}>
                        550 кПа
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.ovpBbo1}>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.045)'}}>
                        {
                            [...mockData].pop()?.bbo3.find((val) => val.name === 'OVP') ? `${ [...mockData].pop()?.bbo3.find((val) => val.name === 'OVP').value.toFixed(1)} мВ` : '– мВ'

                        }
                    </span>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.045)'}}>
                        {
                            [...mockData].pop()?.bbo3?.find((val) => val.name === 'acidity') ? `${ [...mockData].pop()?.bbo3.find((val) => val.name === 'acidity').value.toFixed(1)} pH` : '– pH'
                        }
                    </span>
                    {/*<span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.042)'}}>*/}
                    {/*    {*/}
                    {/*        [...mockData].pop()?.bbo3?.find((val) => val.name === 'temperature') ? `${ [...mockData].pop()?.bbo3.find((val) => val.name === 'temperature').value.toFixed(1)} °C` : '– °C'*/}
                    {/*    }*/}
                    {/*</span>*/}
                </div>

                <div className={styles.paramGroup + ' ' + styles.ovpBbo2}>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.045)'}}>
                        {
                            [...mockData].pop()?.bbo2?.find((val) => val.name === 'OVP') ? `${ [...mockData].pop()?.bbo2.find((val) => val.name === 'OVP').value.toFixed(1)} мВ` : '– мВ'
                        }
                    </span>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.045)'}}>
                        {
                            [...mockData].pop()?.bbo2?.find((val) => val.name === 'acidity') ? `${ [...mockData].pop()?.bbo2.find((val) => val.name === 'acidity').value.toFixed(1)} pH` : '– pH'
                        }
                    </span>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.045)'}}>
                        {
                            [...mockData].pop()?.bbo2?.find((val) => val.name === 'temperature') ? `${ [...mockData].pop()?.bbo2.find((val) => val.name === 'temperature').value.toFixed(1)} °C` : '– °C'
                        }
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.ovpBbo3}>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.045)'}}>
                        {
                            [...mockData].pop()?.bbo4?.find((val) => val.name === 'OVP') ? `${ [...mockData].pop()?.bbo4.find((val) => val.name === 'OVP').value.toFixed(1)} мВ` : '– мВ'
                        }
                    </span>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.045)'}}>
                        {
                            [...mockData].pop()?.bbo4?.find((val) => val.name === 'acidity') ? `${ [...mockData].pop()?.bbo4.find((val) => val.name === 'acidity').value.toFixed(1)} pH` : '– pH'
                        }
                    </span>
                    {/*<span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.042)'}}>*/}
                    {/*    {*/}
                    {/*        [...mockData].pop()?.bbo4?.find((val) => val.name === 'temperature') ? `${ [...mockData].pop()?.bbo4.find((val) => val.name === 'temperature').value.toFixed(1)} °C` : '– °C'*/}
                    {/*    }*/}
                    {/*</span>*/}
                </div>

                <div className={styles.paramGroup + ' ' + styles.ovpBbo4}>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.045)'}}>
                        {
                            [...mockData].pop()?.bbo1?.find((val) => val.name === 'OVP') ? `${ [...mockData].pop()?.bbo1.find((val) => val.name === 'OVP').value.toFixed(1)} мВ` : '– мВ'
                        }
                    </span>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.045)'}}>
                        {
                            [...mockData].pop()?.bbo1?.find((val) => val.name === 'acidity') ? `${ [...mockData].pop()?.bbo1.find((val) => val.name === 'acidity').value.toFixed(1)} pH` : '– pH'
                        }
                    </span>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.045)'}}>
                        {
                            [...mockData].pop()?.bbo1?.find((val) => val.name === 'temperature') ? `${ [...mockData].pop()?.bbo1.find((val) => val.name === 'temperature').value.toFixed(1)} °C` : '– °C'
                        }
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.oxygenContainerBbo1}>
                    <span className={styles.param} style={{width: '4.4vw'}}>
                        {
                            [...mockData].pop()?.bbo1?.find((val) => val.name === 'oxygen') ? `O₂ ${ [...mockData].pop()?.bbo1.find((val) => val.name === 'oxygen').value.toFixed(1)} мг/л` : 'O₂ – мг/л'
                        }
                    </span>
                    <span className={styles.param} style={{width: '4.4vw'}}>
                        {
                            [...mockData].pop()?.bbo1?.find((val) => val.name === 'turbidity') ? `ДИ ${ [...mockData].pop()?.bbo1.find((val) => val.name === 'turbidity').value.toFixed(1)} г/л` : 'ДИ – г/л'
                        }
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.oxygenContainerBbo2}>
                    <span className={styles.param} style={{width: '4.4vw'}}>
                        {
                            [...mockData].pop()?.bbo2?.find((val) => val.name === 'oxygen') ? `O₂ ${ [...mockData].pop()?.bbo2.find((val) => val.name === 'oxygen').value.toFixed(1)} мг/л` : 'O₂ – мг/л'
                        }
                    </span>
                    <span className={styles.param} style={{width: '4.4vw'}}>
                        {
                            [...mockData].pop()?.bbo2?.find((val) => val.name === 'turbidity') ? `ДИ ${ [...mockData].pop()?.bbo2.find((val) => val.name === 'turbidity').value.toFixed(1)} г/л` : 'ДИ – г/л'
                        }
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.oxygenContainerBbo3}>
                    <span className={styles.param} style={{width: '4.4vw'}}>
                        {
                            [...mockData].pop()?.bbo3?.find((val) => val.name === 'oxygen') ? `O₂ ${ [...mockData].pop()?.bbo3.find((val) => val.name === 'oxygen').value.toFixed(1)} мг/л` : 'O₂ – мг/л'
                        }
                    </span>
                    <span className={styles.param} style={{width: '4.4vw'}}>
                        {
                            [...mockData].pop()?.bbo3?.find((val) => val.name === 'turbidity') ? `ДИ ${ [...mockData].pop()?.bbo3.find((val) => val.name === 'turbidity').value.toFixed(1)} г/л` : 'ДИ – г/л'
                        }
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.oxygenContainerBbo4}>
                    <span className={styles.param} style={{width: '4.4vw'}}>
                        {
                            [...mockData].pop()?.bbo4?.find((val) => val.name === 'oxygen') ? `O₂ ${ [...mockData].pop()?.bbo4.find((val) => val.name === 'oxygen').value.toFixed(1)} мг/л` : 'O₂ – мг/л'
                        }
                    </span>
                    <span className={styles.param} style={{width: '4.4vw'}}>
                        {
                            [...mockData].pop()?.bbo4?.find((val) => val.name === 'turbidity') ? `ДИ ${ [...mockData].pop()?.bbo4.find((val) => val.name === 'turbidity').value.toFixed(1)} г/л` : 'ДИ – г/л'
                        }
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo1Red}>
                    <span className={styles.param}>
                        41,5 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo2Red}>
                    <span className={styles.param}>
                        41,5 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo3Red}>
                    <span className={styles.param}>
                        49,8 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo4Red}>
                    <span className={styles.param}>
                        63,5 %
                    </span>
                </div>


                <div className={styles.paramGroup + ' ' + styles.bbo1Purple}>
                    <span className={styles.param}>
                        35,1 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo2Purple}>
                    <span className={styles.param}>
                        35,3 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo3Purple}>
                    <span className={styles.param}>
                        55,3 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo4Purple}>
                    <span className={styles.param}>
                        35,7 %
                    </span>
                </div>


                <div className={styles.paramGroup + ' ' + styles.bbo1Blue}>
                    <span className={styles.param}>
                        35,7 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo2Blue}>
                    <span className={styles.param}>
                        65,1 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo3Blue}>
                    <span className={styles.param}>
                        65,7 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo4Blue}>
                    <span className={styles.param}>

                        {
                            [...mockData].pop()?.bbo1?.find((val) => val.name === 'valve_4') ?
                                `${ [...mockData].pop()?.bbo1.find((val) => val.name === 'valve_4').value.toFixed(1)} %` :
                                '– %'
                        }
                    </span>
                </div>


                <div className={styles.paramGroup + ' ' + styles.bbo1Green}>
                    <span className={styles.param}>
                        35,5%
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo2Green}>
                    <span className={styles.param}>
                        45,1 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo3Green}>
                    <span className={styles.param}>
                        45,1 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo4Green}>
                    <span className={styles.param}>
                        {
                            [...mockData].pop()?.bbo1?.find((val) => val.name === 'valve_1') ?
                                `${ [...mockData].pop()?.bbo1.find((val) => val.name === 'valve_1').value.toFixed(1)} %` :
                                '– %'
                        }
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo1Center}>
                    <span className={styles.param}>

                        {
                            [...mockData].pop()?.bbo3?.find((val) => val.name === 'silt_level') ?
                                `${ [...mockData].pop()?.bbo3.find((val) => val.name === 'silt_level').value.toFixed(1)} м` :
                                '– м'
                        }
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo2Center}>
                    <span className={styles.param}>
                        {
                            [...mockData].pop()?.bbo2?.find((val) => val.name === 'silt_level') ?
                                `${ [...mockData].pop()?.bbo2.find((val) => val.name === 'silt_level').value.toFixed(1)} м` :
                                '– м'
                        }
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo3Center}>
                    <span className={styles.param}>
                        {
                            [...mockData].pop()?.bbo4?.find((val) => val.name === 'silt_level') ?
                                `${ [...mockData].pop()?.bbo4.find((val) => val.name === 'silt_level').value.toFixed(1)} м` :
                                '– м'
                        }

                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo4Center}>
                    <span className={styles.param}>
                        {
                            [...mockData].pop()?.bbo1?.find((val) => val.name === 'silt_level') ?
                                `${ [...mockData].pop()?.bbo1.find((val) => val.name === 'silt_level').value.toFixed(1)} м` :
                                '– м'
                        }
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo1Center2}>
                    <span className={styles.param}>
                        45,5%
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo2Center2}>
                    <span className={styles.param}>
                        57,9 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo3Center2}>
                    <span className={styles.param}>
                        67,9 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo4Center2}>
                    <span className={styles.param}>
                        {
                            [...mockData].pop()?.bbo1?.find((val) => val.name === 'valve_2') ?
                                `${ [...mockData].pop()?.bbo1.find((val) => val.name === 'valve_2').value.toFixed(1)} %` :
                                '– %'
                        }
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo1Center3}>
                    <span className={styles.param}>
                        34.0%
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo2Center3}>
                    <span className={styles.param}>
                        57,9 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo3Center3}>
                    <span className={styles.param}>
                        67,9 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo4Center3}>
                    <span className={styles.param}>
                        {
                            [...mockData].pop()?.bbo1?.find((val) => val.name === 'valve_3') ?
                                `${ [...mockData].pop()?.bbo1.find((val) => val.name === 'valve_3').value.toFixed(1)} %` :
                                '– %'
                        }
                    </span>
                </div>


                <div className={styles.paramGroup + ' ' + styles.exit}>
                    <span className={styles.param} style={{width: '4vw'}}>
                        {
                            [...mockData].pop()?.common.find((val) => val.name === 'water_consumption_out') ? `${ [...mockData].pop()?.common.find((val) => val.name === 'water_consumption_out').value.toFixed(1)} м³/ч` : '– м³/ч'
                        }
                    </span>
                </div>

            </div>
        </div>
    )
}
export default TechSchema
