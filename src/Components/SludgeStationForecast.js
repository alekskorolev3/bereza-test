import React, {useEffect, useState} from 'react'
import styles from '../styles/Modules.module.css'
import {Collapse, ConfigProvider, Form, InputNumber, Switch} from "antd";
import {EditOutlined} from "@ant-design/icons";

const SludgeStationForecast = () => {

    const [isEdit, setIsEdit] = useState(false)

    const [tableValues, setTableValues] = useState({
        Qpac: 10900,
        L5en: 365.3,
        Cen: 338.3,
        sludgeDose: 6,
        Tts: 15,
        T: 20,
        totalPhosphorus: 9.3,
        Pc: 0,
        Pp: 0,
        Pi: 0,
        excessSludge: 0,
        rawSludge: 0,
        V: 0,
        operatingHours: 0
    })

    useEffect(() => {
        setTableValues(prev => ({...prev,
            rawSludge: (tableValues.Qpac*tableValues.Cen*1.2/1000)*0.5,
            Pc: ((tableValues.Qpac * tableValues.L5en)/1000)*((0.75+0.6*(tableValues.Cen/tableValues.L5en)-(0.102* tableValues.Tts *1.072**(tableValues.T-15))/(1+0.17 *tableValues.Tts *1.072**(tableValues.T-15)))),
            V: (((tableValues.Qpac*tableValues.Cen*1.2/1000)*0.5)*100/(100-(100-20*0.1))/1000)}))
    }, [tableValues.Qpac, tableValues.L5en, tableValues.Cen, tableValues.Tts, tableValues.T])

    useEffect(() => {
        setTableValues(prev => ({...prev, Pp: tableValues.totalPhosphorus*tableValues.Qpac/1000*3}))
    }, [tableValues.totalPhosphorus, tableValues.Qpac])

    useEffect(() => {
        setTableValues(prev => ({...prev, Pi: tableValues.Pc + tableValues.Pp}))
    }, [tableValues.Pc, tableValues.Pp])

    useEffect(() => {
        setTableValues(prev => ({...prev, excessSludge: (tableValues.Pi*100/(100-(100-tableValues.sludgeDose*0.1))/1000)}))
    }, [tableValues.Pi, tableValues.sludgeDose])

    useEffect(() => {
        setTableValues(prev => ({...prev, operatingHours: tableValues.excessSludge / 50}))
    }, [tableValues.excessSludge])

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
                    <div className={styles.tableContainer} style={{maxWidth: '500px'}}>
                        <table className={styles.table} style={{borderBottom: '0'}}>
                            <tr>
                                <th colSpan={2}>Образование осадков сточных вод</th>
                            </tr>
                            <tr>
                                <th>Расчет осадка</th>
                                <th>м³/сут</th>
                            </tr>
                            <tr>
                                <td>Избыточный ил</td>
                                <td>
                                    {tableValues.excessSludge}
                                </td>
                            </tr>

                            <tr>
                                <td>Сырой осадок</td>
                                <td>
                                    {tableValues.V}
                                </td>
                            </tr>

                            <tr>
                                <th colSpan={2}>Количество часов работы насосного оборудования в сутки исходя из объема осадка, ч/сут</th>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    {tableValues.operatingHours}
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
                                items={[{ key: '1', label: 'Показать полный расчет', children:
                                        <table className={styles.tableInner}>
                                            <tr>
                                                <th>Параметр</th>
                                                <th>Значение</th>
                                            </tr>
                                            <tr>
                                                <td>Qрас</td>
                                                <td>
                                                    <InputNumber
                                                        defaultValue={tableValues.Qpac}
                                                        disabled={!isEdit}
                                                        bordered={false} min={0} max={20000} step='0.1'
                                                        onChange={(e) => setTableValues(prev => ({...prev, Qpac: e}))}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>L5en, мг/л</td>
                                                <td>
                                                    <InputNumber
                                                        defaultValue={tableValues.L5en}
                                                        disabled={!isEdit}
                                                        bordered={false} min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({...prev, L5en: e}))}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Cen, мг/л</td>
                                                <td>
                                                    <InputNumber
                                                        defaultValue={tableValues.Cen}
                                                        disabled={!isEdit}
                                                        bordered={false} min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({...prev, Cen: e}))}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Доза избыточного ила, г/дм³</td>
                                                <td>
                                                    <InputNumber
                                                        defaultValue={tableValues.sludgeDose}
                                                        disabled={!isEdit}
                                                        bordered={false} min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({...prev, sludgeDose: e}))}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Tts, сут</td>
                                                <td>
                                                    <InputNumber
                                                        defaultValue={tableValues.Tts}
                                                        bordered={false} min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({...prev, Tts: e}))}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>T, С°</td>
                                                <td>
                                                    <InputNumber
                                                        defaultValue={tableValues.T}
                                                        bordered={false} min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({...prev, T: e}))}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Фосфор общий на входе в биологию, мг/дм³</td>
                                                <td>
                                                    <InputNumber
                                                        disabled={!isEdit}
                                                        defaultValue={tableValues.totalPhosphorus}
                                                        bordered={false} min={0} max={2000}
                                                        onChange={(e) => setTableValues(prev => ({...prev, totalPhosphorus: e}))}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Pc, кг/сут</td>
                                                <td>
                                                    {tableValues.Pc}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Pp, кг/сут</td>
                                                <td>
                                                    {tableValues.Pp}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Pi, кг/сут</td>
                                                <td>
                                                    {tableValues.Pi}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Избыточный ил, м³/сут</td>
                                                <td>
                                                    {tableValues.excessSludge}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Сырой осадок, кг/сут</td>
                                                <td>
                                                    {tableValues.rawSludge}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>V, м³/сут</td>
                                                <td>
                                                    {tableValues.V}
                                                </td>
                                            </tr>
                                        </table>,
                                    extra: <Switch
                                        checkedChildren={
                                            <EditOutlined />
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

export default SludgeStationForecast
