import React, {useState} from 'react'
import styles from "../styles/Data.module.css";
import {ConfigProvider, Switch, Tooltip} from "antd";


const TechSchema = () => {

    const [switchValue, setSwitchValue] = useState({checked: false, value: '27,3 м³/ч'})

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
                            <Switch size='small' onChange={(e) => setSwitchValue(prev => ({...prev, checked: !prev.checked}))}/>
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
                    <span className={styles.param} style={{width: '4vw'}}>
                        15,5 м³/ч
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.blowerStation}>
                    <span className={styles.param} style={{width: '4vw'}}>
                        154,2 м³/ч
                    </span>
                    <span className={styles.param} style={{width: '4vw'}}>
                        187,7 м³/ч
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.ovpBbo1}>
                    <span className={styles.param}>
                        120 мВ
                    </span>
                    <span className={styles.param}>
                        8,6 pH
                    </span>
                    <span className={styles.param}>
                        14 °C
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.ovpBbo2}>
                    <span className={styles.param}>
                        117 мВ
                    </span>
                    <span className={styles.param}>
                        4,1 pH
                    </span>
                    <span className={styles.param}>
                        17 °C
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.ovpBbo3}>
                    <span className={styles.param}>
                        97 мВ
                    </span>
                    <span className={styles.param}>
                        5,2 pH
                    </span>
                    <span className={styles.param}>
                        13 °C
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.ovpBbo4}>
                    <span className={styles.param}>
                        156 мВ
                    </span>
                    <span className={styles.param}>
                        4,9 pH
                    </span>
                    <span className={styles.param}>
                        15 °C
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo1Red}>
                    <span className={styles.param}>
                        57,2 %
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
                        35,7 %
                    </span>
                </div>


                <div className={styles.paramGroup + ' ' + styles.bbo1Green}>
                    <span className={styles.param}>
                        55,1 %
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
                        34,9 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo2Center}>
                    <span className={styles.param}>
                        35,9 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo3Center}>
                    <span className={styles.param}>
                        36,9 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo4Center}>
                    <span className={styles.param}>
                        37,9 %
                    </span>
                </div>

                <div className={styles.paramGroup + ' ' + styles.bbo1Center2}>
                    <span className={styles.param}>
                        37,9 %
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
                        37,9 %
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
