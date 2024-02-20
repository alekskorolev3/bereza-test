import React, {useEffect, useState} from 'react'
import styles from '../styles/Modules.module.css'
import {Badge, Collapse, ConfigProvider, Form, InputNumber, Switch, Tooltip} from "antd";
import {EditOutlined} from "@ant-design/icons";

const AirSupplyForecast = () => {

    const [isEdit, setIsEdit] = useState(false)

    const [tableValues, setTableValues] = useState({
        ammoniaNitrogenInput: 57.5,
        ammoniaNitrogenOutput: 15,
        bpkInput: 365.3,
        bpkOutput: 20,
        incomingWastewater: 10900,
        temp: 20,
        solubility: 9.09,
        totalNitrogen: 73,
        organicNitrogen: 2,
        ammoniaNitrogenAeroOutlet: 15,
        nitrateNitrogenAuroOutlet: 5,
        concNitrogenMicroorg: 0,
        denitrificationNitrogen: 0,
        activatedSlugdeDose: 3.5,
        airSupplyAero: 11000,
        calcData: 0,
        B: 0,
        OVc: 0,
        OVn: 0,
        OVd: 0,
        OVO2: 0,
        OVO2h: 0,
        OVMax: 0,
        q0: 0,
        q0aero: 10,
        h: 2.39,
        SOTE: 20,
        Qair: 0
    })

    useEffect(() => {
        setTableValues(prev => ({...prev, concNitrogenMicroorg: 0.04 * prev.bpkInput}))
    }, [tableValues.bpkInput])

    useEffect(() => {
        setTableValues(prev => ({...prev, denitrificationNitrogen: prev.totalNitrogen - prev.organicNitrogen - prev.ammoniaNitrogenAeroOutlet - prev.nitrateNitrogenAuroOutlet - prev.concNitrogenMicroorg}))
    }, [tableValues.totalNitrogen, tableValues.organicNitrogen, tableValues.ammoniaNitrogenAeroOutlet, tableValues.nitrateNitrogenAuroOutlet, tableValues.concNitrogenMicroorg])


    useEffect(() => {
        setTableValues(prev => ({...prev, B: prev.bpkInput * prev.incomingWastewater / 1000}))
    }, [tableValues.bpkInput, tableValues.incomingWastewater])

    useEffect(() => {
        setTableValues(prev => ({...prev, OVc: prev.B*(0.56+((0.15* prev.activatedSlugdeDose * (1.072**(prev.temp-15)))/(1+0.17*prev.activatedSlugdeDose*(1.072**(prev.temp-15)))))}))
    }, [tableValues.B, tableValues.activatedSlugdeDose, tableValues.temp])

    useEffect(() => {
        setTableValues(prev => ({...prev,
            OVd: prev.incomingWastewater*(2.9*prev.denitrificationNitrogen)/1000,
            OVn: prev.incomingWastewater *(4.3*(prev.denitrificationNitrogen + prev.nitrateNitrogenAuroOutlet)/1000)}))
    }, [tableValues.incomingWastewater, tableValues.denitrificationNitrogen, tableValues.nitrateNitrogenAuroOutlet])

    useEffect(() => {
        setTableValues(prev => ({...prev,
            OVO2: prev.OVc+prev.OVn-prev.OVd,
            OVO2h: (prev.OVc+prev.OVn-prev.OVd) / 24,
            OVMax: (1.2*(prev.OVc-prev.OVd)+1.8*prev.OVn)/24,
            q0: ((1.2*(prev.OVc-prev.OVd)+1.8*prev.OVn)/24)*(prev.solubility/(prev.solubility-2)),
            Qair: ((1.2*(prev.OVc-prev.OVd)+1.8*prev.OVn)/24)*(prev.solubility/(prev.solubility-2))*100/0.3/0.5*(1/prev.SOTE)
        }))
    }, [tableValues.OVc, tableValues.OVn, tableValues.OVd])


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
                    <div className={styles.tableContainer} style={{maxWidth: '750px'}}>
                        <table className={styles.table} style={{borderBottom: '0'}}>
                            <tr>
                                <th>Концентрация</th>
                                <th>Вход на биоблок, мг/дм³</th>
                                <th>Выпуск, мг/дм³</th>
                            </tr>
                            <tr>
                                <td>Азот аммонийный, мг/дм³</td>
                                <td>
                                    <InputNumber
                                        defaultValue={tableValues.ammoniaNitrogenInput}
                                        variant='borderless' min={0} max={200}
                                        onChange={(e) => setTableValues(prev => ({...prev, ammoniaNitrogenInput: e}))}
                                    />
                                </td>
                                <td>
                                    <InputNumber
                                        defaultValue={tableValues.ammoniaNitrogenOutput}
                                        variant='borderless' min={0} max={200}
                                        onChange={(e) => setTableValues(prev => ({...prev, ammoniaNitrogenOutput: e}))}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>БПК5, мг/дм³</td>
                                <td>
                                    <InputNumber
                                        defaultValue={tableValues.bpkInput}
                                        variant='borderless' min={0} max={1000}
                                        onChange={(e) => setTableValues(prev => ({...prev, bpkInput: e}))}
                                    />
                                </td>
                                <td>
                                    <InputNumber
                                        defaultValue={tableValues.bpkOutput}
                                        variant='borderless' min={0} max={2000}
                                        onChange={(e) => setTableValues(prev => ({...prev, bpkOutput: e}))}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>Входящие сточные воды, м³/сут</td>
                                <td colSpan={2}>
                                    <InputNumber
                                        defaultValue={tableValues.incomingWastewater}
                                        variant='borderless' min={0} max={20000}
                                        onChange={(e) => setTableValues(prev => ({...prev, incomingWastewater: e}))}
                                    />
                                </td>
                            </tr>

                            <th colSpan={3}>
                                Данные для расчета необходимого воздуха на проведение биологической очистки сточных вод
                            </th>

                            <tr>
                                <td>Температура</td>
                                <td colSpan={2}>
                                    <InputNumber
                                        defaultValue={tableValues.temp}
                                        variant='borderless' min={0} max={200}
                                        onChange={(e) => setTableValues(prev => ({...prev, temp: e}))}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>Растворимость кислорода в воде</td>
                                <td colSpan={2}>
                                    <InputNumber
                                        defaultValue={tableValues.solubility}
                                        variant='borderless' disabled={true}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>Азот общий после первичных, мг/дм³</td>
                                <td colSpan={2}>
                                    <InputNumber
                                        defaultValue={tableValues.totalNitrogen}
                                        variant='borderless' min={0} max={200}
                                        onChange={(e) => setTableValues(prev => ({...prev, totalNitrogen: e}))}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>Азот органических веществ на выходе из аэротенков, мг/дм³</td>
                                <td colSpan={2}>
                                    <InputNumber
                                        defaultValue={tableValues.organicNitrogen}
                                        variant='borderless' disabled={true}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>Азот аммонийный на выходе из аэротенков, мг/дм³</td>
                                <td colSpan={2}>
                                    <InputNumber
                                        defaultValue={tableValues.ammoniaNitrogenAeroOutlet}
                                        variant='borderless' disabled={true}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>Азот нитратный на выходе из аэротенков, мг/дм³</td>
                                <td colSpan={2}>
                                    <InputNumber
                                        defaultValue={tableValues.nitrateNitrogenAuroOutlet.toFixed(1)}
                                        variant='borderless' disabled={true}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>Концентрация азота потребляемого микроорганизмами, мг/дм³</td>
                                <td colSpan={2}>
                                    <InputNumber
                                        defaultValue={tableValues.concNitrogenMicroorg.toFixed(1)}
                                        variant='borderless' disabled={true}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>Азот подлежащий денитрификации, мг/дм³</td>
                                <td colSpan={2}>
                                    <InputNumber
                                        defaultValue={tableValues.denitrificationNitrogen.toFixed(1)}
                                        variant='borderless' disabled={true}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>Доза активного ила (аi), г/дм³</td>
                                <td colSpan={2}>
                                    <InputNumber
                                        defaultValue={tableValues.activatedSlugdeDose}
                                        variant='borderless' min={0} max={200}
                                        onChange={(e) => setTableValues(prev => ({...prev, activatedSlugdeDose: e}))}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    Данные по проекту (подача воздуха в аэротенки)
                                </th>
                                <th colSpan={2}>
                                    Расчетные данные
                                </th>
                            </tr>

                            <tr>
                                <td style={{borderBottom: 'none'}}>
                                    <InputNumber
                                        defaultValue={tableValues.airSupplyAero.toFixed(1)}
                                        variant='borderless' disabled={true}
                                    />
                                </td>
                                <td colSpan={2} style={{borderBottom: 'none'}}>

                                    {
                                        tableValues.Qair > tableValues.airSupplyAero ?
                                            <Tooltip title="Необходимо оптимизировать работу отстойников-осветлителей
                                    либо проверить промышленные промпредприятия на наличие сброса высококонцентрированных сточных вод,
                                    которые не соответствуют нормативу Правил сброса сточных вод в городскую канализационную сеть ">
                                                <Badge dot>
                                                    {tableValues.Qair.toFixed(1)}
                                                </Badge>
                                            </Tooltip> :
                                            <>{tableValues.Qair.toFixed(1)}</>
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
                                items={[{ key: '1', label: 'Показать полный расчет', children:
                                        <table className={styles.tableInner}>
                                            <tr>
                                                <th colSpan={2}>Расчет потребности в кислороде</th>
                                            </tr>

                                            <tr>
                                                <td>В, кг</td>
                                                <td colSpan={2}>
                                                    <InputNumber
                                                        defaultValue={tableValues.B.toFixed(1)}
                                                        variant='borderless' disabled={true}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>OVc, кг</td>
                                                <td colSpan={2}>
                                                    <InputNumber
                                                        defaultValue={tableValues.OVc.toFixed(1)}
                                                        variant='borderless' disabled={true}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>OVn, кг</td>
                                                <td colSpan={2}>
                                                    <InputNumber
                                                        defaultValue={tableValues.OVn.toFixed(1)}
                                                        variant='borderless' disabled={true}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>OVd, кг</td>
                                                <td colSpan={2}>
                                                    <InputNumber
                                                        defaultValue={tableValues.OVd.toFixed(1)}
                                                        variant='borderless' disabled={true}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>OV, кгO₂</td>
                                                <td colSpan={2}>
                                                    <InputNumber
                                                        defaultValue={tableValues.OVO2.toFixed(1)}
                                                        variant='borderless' disabled={true}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>OV, кгO₂/h</td>
                                                <td colSpan={2}>
                                                    <InputNumber
                                                        defaultValue={tableValues.OVO2h.toFixed(1)}
                                                        variant='borderless' disabled={true}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>OVmax, кгO₂/h</td>
                                                <td colSpan={2}>
                                                    <InputNumber
                                                        defaultValue={tableValues.OVMax.toFixed(1)}
                                                        variant='borderless' disabled={true}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>q0, кг/h</td>
                                                <td colSpan={2}>
                                                    <InputNumber
                                                        defaultValue={tableValues.q0.toFixed(1)}
                                                        variant='borderless' disabled={true}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <th colSpan={2}>Расчет количества воздуха</th>
                                            </tr>

                                            <tr>
                                                <td>q0, гO₂/м³*м</td>
                                                <td>
                                                    <InputNumber
                                                    defaultValue={tableValues.q0aero}
                                                    variant='borderless' min={0} max={200}
                                                    disabled={!isEdit}
                                                    onChange={(e) => setTableValues(prev => ({...prev, q0aero: e}))}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>h,м</td>
                                                <td>
                                                    <InputNumber
                                                        defaultValue={tableValues.h.toFixed(1)}
                                                        variant='borderless' disabled={true}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>SOTE общее</td>
                                                <td>
                                                    <InputNumber
                                                        defaultValue={tableValues.SOTE.toFixed(1)}
                                                        variant='borderless' disabled={true}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Qвозд, м³/h</td>
                                                <td>
                                                    <InputNumber
                                                        defaultValue={tableValues.Qair.toFixed(1)}
                                                        variant='borderless' disabled={true}
                                                    />
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

export default AirSupplyForecast
