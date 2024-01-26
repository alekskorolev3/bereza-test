import React, {useState} from 'react'
import styles from "../styles/Data.module.css";
import {ConfigProvider, Switch, Tooltip} from "antd";
import {useRecoilValue} from "recoil";
import {messagesAtom} from "../state/messages";


const TechSchema = () => {

    const [switchValue, setSwitchValue] = useState({checked: false, value: '27,3 м³/ч'})

    const mockData2 = {
        "bbo1": [{
            "name": "valve_4",
            "value": 27.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:57:56",
            "bbo_id": 1
        }, {
            "name": "valve_3",
            "value": 21.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:57:54",
            "bbo_id": 1
        }, {
            "name": "valve_2",
            "value": 61.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:57:51",
            "bbo_id": 1
        }, {
            "name": "valve_1",
            "value": 47.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:57:49",
            "bbo_id": 1
        }, {
            "name": "OVP",
            "value": -48.31941223144531,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:57:47",
            "bbo_id": 1
        }, {
            "name": "air_consumption",
            "value": 0.6010081171989441,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:57:45",
            "bbo_id": 1
        }, {
            "name": "consumption_silt_level",
            "value": 0.5644354820251465,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:57:43",
            "bbo_id": 1
        }, {
            "name": "redundant_silt_level",
            "value": 1.3449219465255737,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:57:41",
            "bbo_id": 1
        }, {
            "name": "silt_level",
            "value": 5.949529647827148,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:57:39",
            "bbo_id": 1
        }, {
            "name": "temperature",
            "value": 15.249006271362305,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:57:37",
            "bbo_id": 1
        }, {
            "name": "acidity",
            "value": 1.0861589908599854,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:57:35",
            "bbo_id": 1
        }, {
            "name": "turbidity",
            "value": 2.1357617378234863,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:57:32",
            "bbo_id": 1
        }],
        "bbo2": [{
            "name": "silt_level",
            "value": 1.7770214080810547,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:58:06",
            "bbo_id": 2
        }, {
            "name": "temperature",
            "value": 11.854852676391602,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:58:04",
            "bbo_id": 2
        }, {
            "name": "OVP",
            "value": -483.7000427246094,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:58:02",
            "bbo_id": 2
        }, {
            "name": "acidity",
            "value": 7.547423839569092,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:58:00",
            "bbo_id": 2
        }, {
            "name": "oxygen",
            "value": 0.6732020378112793,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:57:58",
            "bbo_id": 2
        }],
        "bbo3": [{
            "name": "silt_level",
            "value": 0.6010081171989441,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:58:17",
            "bbo_id": 3
        }, {
            "name": "oxygen",
            "value": 0.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:58:15",
            "bbo_id": 3
        }, {
            "name": "turbidity",
            "value": 4.796090602874756,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:58:13",
            "bbo_id": 3
        }, {
            "name": "acidity",
            "value": 6.531230449676514,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:58:11",
            "bbo_id": 3
        }, {
            "name": "OVP",
            "value": -439.3999938964844,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:58:08",
            "bbo_id": 3
        }],
        "bbo4": [{
            "name": "silt_level",
            "value": 0.56486576795578,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:58:27",
            "bbo_id": 4
        }, {
            "name": "oxygen",
            "value": 0.9780431389808655,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:58:25",
            "bbo_id": 4
        }, {
            "name": "turbidity",
            "value": 9.262374877929688,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:58:23",
            "bbo_id": 4
        }, {
            "name": "acidity",
            "value": 6.585677623748779,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:58:21",
            "bbo_id": 4
        }, {
            "name": "OVP",
            "value": -450.60003662109375,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 16:58:19",
            "bbo_id": 4
        }]
    }

    const mockData = useRecoilValue(messagesAtom);

    console.log(mockData)

    console.log([...mockData].pop()?.bbo1)
    return (
        <div className={styles.container} style={{height: "fit-content"}}>
            <div className={styles.imgContainer}>

                <div className={styles.paramGroup + ' ' + styles.sandTrapsEntry}>
                    <span className={styles.param} style={{width: '4vw'}}>
                        425,1 м³/ч
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
                        <Tooltip title='Включение откачки изб. активного ила и сырого остатка' color='#1F4458'>
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
                        154.2 м³/ч
                    </span>
                    <span className={styles.param} style={{width: '4vw'}}>
                        0.55 МПа
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.ovpBbo1}>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.042)'}}>
                        {
                            [...mockData].pop()?.bbo1.find((val) => val.name === 'OVP') ? `${mockData.bbo1.find((val) => val.name === 'OVP').value.toFixed(1)} мВ` : '– мВ'

                        }
                    </span>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.042)'}}>
                        {
                            [...mockData].pop()?.bbo1?.find((val) => val.name === 'acidity') ? `${mockData.bbo1.find((val) => val.name === 'acidity').value.toFixed(1)} pH` : '– pH'
                        }
                    </span>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.042)'}}>
                        {
                            [...mockData].pop()?.bbo1?.find((val) => val.name === 'temperature') ? `${mockData.bbo1.find((val) => val.name === 'temperature').value.toFixed(1)} °C` : '– °C'
                        }
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.ovpBbo2}>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.042)'}}>
                        {
                            [...mockData].pop()?.bbo2?.find((val) => val.name === 'OVP') ? `${mockData.bbo2.find((val) => val.name === 'OVP').value.toFixed(1)} мВ` : '– мВ'
                        }
                    </span>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.042)'}}>
                        {
                            [...mockData].pop()?.bbo2?.find((val) => val.name === 'acidity') ? `${mockData.bbo2.find((val) => val.name === 'acidity').value.toFixed(1)} pH` : '– pH'
                        }
                    </span>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.042)'}}>
                        {
                            [...mockData].pop()?.bbo2?.find((val) => val.name === 'temperature') ? `${mockData.bbo2.find((val) => val.name === 'temperature').value.toFixed(1)} °C` : '– °C'
                        }
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.ovpBbo3}>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.042)'}}>
                        {
                            [...mockData].pop()?.bbo3?.find((val) => val.name === 'OVP') ? `${mockData.bbo3.find((val) => val.name === 'OVP').value.toFixed(1)} мВ` : '– мВ'
                        }
                    </span>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.042)'}}>
                        {
                            [...mockData].pop()?.bbo3?.find((val) => val.name === 'acidity') ? `${mockData.bbo3.find((val) => val.name === 'acidity').value.toFixed(1)} pH` : '– pH'
                        }
                    </span>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.042)'}}>
                        {
                            [...mockData].pop()?.bbo3?.find((val) => val.name === 'temperature') ? `${mockData.bbo3.find((val) => val.name === 'temperature').value.toFixed(1)} °C` : '– °C'
                        }
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.ovpBbo4}>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.042)'}}>
                        {
                            [...mockData].pop()?.bbo4?.find((val) => val.name === 'OVP') ? `${mockData.bbo4.find((val) => val.name === 'OVP').value.toFixed(1)} мВ` : '– мВ'
                        }
                    </span>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.042)'}}>
                        {
                            [...mockData].pop()?.bbo4?.find((val) => val.name === 'acidity') ? `${mockData.bbo4.find((val) => val.name === 'acidity').value.toFixed(1)} pH` : '– pH'
                        }
                    </span>
                    <span className={styles.param} style={{width: 'calc((100vw - 238px) * 0.042)'}}>
                        {
                            [...mockData].pop()?.bbo4?.find((val) => val.name === 'temperature') ? `${mockData.bbo4.find((val) => val.name === 'temperature').value.toFixed(1)} °C` : '– °C'
                        }
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo1Red}>
                    <span className={styles.param}>
                        {
                            [...mockData].pop()?.bbo1?.find((val) => val.name === 'air_consumption') ?
                                `${(mockData.bbo1.find((val) => val.name === 'air_consumption').value * 100).toFixed(1)} %` :
                                '– %'
                        }
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
                        {[...mockData].pop()?.bbo1?.map((val) => {
                            if (val.name === 'valve_1') {
                                return `${val.value.toFixed(1)} %`
                            }
                        })}
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
                        35,7 %
                    </span>
                </div>


                <div className={styles.paramGroup + ' ' + styles.bbo1Green}>
                    <span className={styles.param}>
                        {[...mockData].pop()?.bbo1?.map((val) => {
                            if (val.name === 'valve_2') {
                                return `${val.value.toFixed(1)} %`
                            }
                        })}
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
                        34,9 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo1Center}>
                    <span className={styles.param}>
                        {[...mockData].pop()?.bbo1?.map((val) => {
                            if (val.name === 'silt_level') {
                                return `${val.value.toFixed(1)} м`
                            }
                        })}
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo2Center}>
                    <span className={styles.param}>
                        {[...mockData].pop()?.bbo2?.map((val) => {
                            if (val.name === 'silt_level') {
                                return `${val.value.toFixed(1)} м`
                            }
                        })}
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo3Center}>
                    <span className={styles.param}>
                        {[...mockData].pop()?.bbo2?.map((val) => {
                            if (val.name === 'silt_level') {
                                return `${val.value.toFixed(1)} м`
                            }
                        })}
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo4Center}>
                    <span className={styles.param}>
                        {[...mockData].pop()?.bbo2?.map((val) => {
                            if (val.name === 'silt_level') {
                                return `${val.value.toFixed(1)} м`
                            }
                        })}
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo1Center2}>
                    <span className={styles.param}>
                        {[...mockData].pop()?.bbo1?.map((val) => {
                            if (val.name === 'valve_3') {
                                return `${val.value.toFixed(1)} %`
                            }
                        })}
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
                        77,9 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo1Center3}>
                    <span className={styles.param}>
                        {[...mockData].pop()?.bbo1?.map((val) => {
                            if (val.name === 'valve_4') {
                                return `${val.value.toFixed(1)} %`
                            }
                        })}
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
                        77,9 %
                    </span>
                </div>


                <div className={styles.paramGroup + ' ' + styles.exit}>
                    <span className={styles.param} style={{width: '4vw'}}>
                        189,2 м³/ч
                    </span>
                </div>

            </div>
        </div>
    )
}
export default TechSchema
