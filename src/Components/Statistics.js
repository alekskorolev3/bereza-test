import React, {useEffect, useState} from 'react'
import styles from "../styles/Statistics.module.css"
import {Button, Checkbox, DatePicker, Form, InputNumber, message, Select, Space} from "antd";
import {Line} from "react-chartjs-2";
import locale from 'antd/es/date-picker/locale/ru_RU';
import 'dayjs/locale/ru';
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";
import {convertToMinutes} from "../helpers/statHelpers";
import {useStatisticsActions} from "../actions/stat.actions";
import {API} from "../helpers/const";

const {RangePicker} = DatePicker;
const {Option} = Select;

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Statistics = () => {

    const [form] = Form.useForm();
    const [selectedParam, setSelectedParam] = useState({
        name: '',
        bbo: [],
        datetime: [],
        step: {value: '5', postfix: 'min'}
    })
    const [checkedBbo, setCheckedBbo] = useState([{name: '', bbo: []}])
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    })
    const [isLoading, setIsLoading] = useState(false)
    const [dataIsLoaded, setDataIsLoaded] = useState(false)
    const statisticsActions = useStatisticsActions()

    const [messageApi, contextHolder] = message.useMessage();
    const errorGet = () => {
        messageApi.open({
            type: 'error',
            content: `Ошибка подключения к серверу ${API}/stat`,
        });
    };

    useEffect(() => {
        if (checkedBbo.name === selectedParam.name) {
            setSelectedParam((prev) => ({...prev, bbo: checkedBbo.bbo}))
        }
    }, [checkedBbo])




    const handleForm = async (values) => {

        console.log(selectedParam)
        setIsLoading(prev => !prev)
        options.plugins.title.text = selectedParam.rus_name
        statisticsActions.getStatistics({...values, bbo: selectedParam.bbo.bbo})
            .then((response) => {
                let arr = {
                    labels: [],
                    datasets: []
                }
                Object.keys(response.data).forEach((key, index) => (
                    Object.keys(response.data[key]).forEach(key2 => {
                        console.log("INDEX ", index)
                        if (arr.labels.length === 0) {
                            arr.labels = response.data[key][key2].filter((obj, index) => {
                                if (index % (Math.floor(convertToMinutes(values.step, values.postfix) / 3) >= 1 ? Math.floor(convertToMinutes(values.step, values.postfix) / 3) : 1) === 0) {
                                    return obj.time
                                }
                            }).map(obj => obj.time)
                        }
                        arr.datasets.push({
                            label: `ББО ${response.data[key][key2][0].bbo_id}`,
                            data: response.data[key][key2].filter((obj, index) => {
                                if (index % (Math.floor(convertToMinutes(values.step, values.postfix) / 3) >= 1 ? Math.floor(convertToMinutes(values.step, values.postfix) / 3) : 1) === 0) {
                                    return obj.value
                                }
                            }).map(obj => obj.value),
                            borderColor: chartColors[index].borderColor,
                            backgroundColor: chartColors[index].backgroundColor
                        })
                    })
                ))

                setChartData(() => arr)
                setIsLoading(false)
                setDataIsLoaded(prev => prev ? prev : !prev)
            })
            .catch(() => errorGet())
    }

    return (
        <>
            {contextHolder}
            <div className={styles.container}>
                <h3 className={styles.title}>Статистика</h3>

                <Form onFinish={(values) => handleForm(values)} form={form}>

                    <Form.Item label="Выбор параметра: " name="params"
                               rules={[{required: true}]}>
                        <Select
                            labelInValue
                            style={{maxWidth: "500px"}}
                            optionLabelProp="label"
                            onChange={(value) => setSelectedParam(() => {
                                return {
                                    rus_name: value.label,
                                    name: value.value,
                                    bbo: checkedBbo.find(el => el.name === value.value)
                                }
                            })}
                            options={
                                [
                                    {value: 'OVP', label: 'ОВП', bbo: [1, 2, 3, 4]},
                                    {value: 'acidity', label: 'Кислотность', bbo: [1, 2, 3, 4]},
                                    {value: 'temperature', label: 'Температура', bbo: [1, 2, 3, 4]},
                                    {value: 'silt_level', label: 'Уровень ила', bbo: [1, 2, 3, 4]},
                                    {value: 'turbidity', label: 'Доза ила (мутность)', bbo: [1, 2, 3, 4]},
                                    {value: 'oxygen', label: 'Кислород', bbo: [1, 2, 3, 4]},
                                ]}
                            optionRender={(option) => (
                                <Space style={{display: "flex", justifyContent: "space-between"}}>
                                    <span>{option.label}</span>
                                    <div style={{display: "flex", flexDirection: "row", gap: "12px"}}>
                                        <span>ББО: </span>
                                        <Checkbox.Group
                                            onClick={(e) => {
                                                e.preventDefault()
                                                e.stopPropagation()
                                            }}
                                            onChange={(list) =>
                                                setCheckedBbo((prev) => {
                                                        let flag = prev.findIndex(el => el.name === option.value)

                                                        console.log(flag)
                                                        if (flag !== -1) {
                                                            let copy = prev
                                                            copy[flag].bbo = list
                                                            return copy
                                                        } else return [...prev, {name: option.value, bbo: list}]
                                                    }
                                                )}
                                            style={{display: 'flex', flexDirection: 'row'}}
                                            options={option.data.bbo}/>
                                    </div>
                                </Space>

                            )}
                        />
                    </Form.Item>

                    <Form.Item label="Промежуток времени: " name="datetime"
                               rules={[{required: true}]}>
                        <RangePicker showTime locale={locale}/>
                    </Form.Item>

                    <Form.Item initialValue={5} label="Шаг времени на графике: " name="step"
                               rules={[{required: true}]}>
                        <InputNumber addonAfter={selectAfter} defaultValue={5} value={5}/>
                    </Form.Item>


                    <Button type="primary" htmlType="submit" loading={isLoading}
                            style={{backgroundColor: "#00A3E7", fontWeight: 500}}>
                        Отправить
                    </Button>

                    {dataIsLoaded ?
                        <Button type="primary" style={{marginLeft: "14px", backgroundColor: "#00A3E7", fontWeight: 500}}>
                            Выгрузка в Excel
                        </Button> : null}
                </Form>

                <Line options={options} data={chartData}/>
            </div>
        </>
    )
}


const selectAfter = (
    <Form.Item name='postfix' initialValue='min' style={{marginBottom: '0'}}>
        <Select defaultValue='min' style={{width: 80}}>
            <Option value="min">мин.</Option>
            <Option value="hour">час.</Option>
            <Option value="day">дн.</Option>
            <Option value="month">мес.</Option>
        </Select>
    </Form.Item>
);

let options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const chartColors = [
    {
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
    },
    {
        borderColor: 'rgb(76, 177, 64)',
        backgroundColor: 'rgba(76, 177, 64, 0.5)'
    },
    {
        borderColor: 'rgb(236, 122, 8)',
        backgroundColor: 'rgba(236, 122, 8, 0.5)'
    },
    {
        borderColor: 'rgb(201, 25, 11)',
        backgroundColor: 'rgba(201, 25, 11, 0.5)'
    },
    {
        borderColor: 'rgb(87, 82, 209)',
        backgroundColor: 'rgba(87, 82, 209, 0.5)'
    }
]

const mockData = {
    "bbo1": [
        {
            "name": "valve_4",
            "value": 27.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:09:56",
            "bbo_id": 1
        },
        {
            "name": "valve_3",
            "value": 21.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:09:54",
            "bbo_id": 1
        },
        {
            "name": "valve_2",
            "value": 61.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:09:51",
            "bbo_id": 1
        },
        {
            "name": "valve_1",
            "value": 47.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:09:49",
            "bbo_id": 1
        },
        {
            "name": "OVP",
            "value": -46.253662109375,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:09:47",
            "bbo_id": 1
        },
        {
            "name": "air_consumption",
            "value": 0.6263937950134277,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:09:45",
            "bbo_id": 1
        },
        {
            "name": "consumption_silt_level",
            "value": 0.957268476486206,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:09:43",
            "bbo_id": 1
        },
        {
            "name": "redundant_silt_level",
            "value": 1.4157408475875854,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:09:41",
            "bbo_id": 1
        },
        {
            "name": "silt_level",
            "value": 5.138175964355469,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:09:39",
            "bbo_id": 1
        },
        {
            "name": "temperature",
            "value": 15.241003036499023,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:09:37",
            "bbo_id": 1
        },
        {
            "name": "acidity",
            "value": 1.1742870807647705,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:09:35",
            "bbo_id": 1
        },
        {
            "name": "turbidity",
            "value": 2.228086233139038,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:09:33",
            "bbo_id": 1
        }
    ],
    "bbo2": [
        {
            "name": "silt_level",
            "value": 1.8098440170288086,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:10:06",
            "bbo_id": 2
        },
        {
            "name": "temperature",
            "value": 11.59305477142334,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:10:04",
            "bbo_id": 2
        },
        {
            "name": "OVP",
            "value": -485.8000183105469,

            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:10:02",
            "bbo_id": 2
        },
        {
            "name": "acidity",
            "value": 7.617603302001953,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:10:00",
            "bbo_id": 2
        },
        {
            "name": "oxygen",
            "value": 2.4503860473632812,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:09:58",
            "bbo_id": 2
        }
    ],
    "bbo3": [
        {
            "name": "silt_level",
            "value": 0.6268240809440613,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:10:17",
            "bbo_id": 3
        },
        {
            "name": "oxygen",
            "value": 0.0,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:10:15",
            "bbo_id": 3
        },
        {
            "name": "turbidity",
            "value": 4.946056365966797,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:10:13",
            "bbo_id": 3
        },
        {
            "name": "acidity",
            "value": 6.689656734466553,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:10:11",
            "bbo_id": 3
        },
        {
            "name": "OVP",
            "value": -447.8999938964844,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:10:08",
            "bbo_id": 3
        }
    ],
    "bbo4": [
        {
            "name": "silt_level",
            "value": 16666.0,
            "is_main": true,
            "is_masked": true,
            "is_ready": true,
            "is_accident": true,
            "time": "26.01.2024 13:11:58",
            "bbo_id": 4
        },
        {
            "name": "silt_level",
            "value": 0.0,
            "is_main": true,
            "is_masked": true,
            "is_ready": true,
            "is_accident": true,
            "time": "26.01.2024 13:11:01",
            "bbo_id": 4
        },
        {
            "name": "silt_level",
            "value": 0.957268476486206,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:10:28",
            "bbo_id": 4
        },
        {
            "name": "oxygen",
            "value": 1.5051460266113281,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:10:25",
            "bbo_id": 4
        },
        {
            "name": "turbidity",
            "value": 8.823822021484375,
            "is_main": true,
            "is_masked": false,
            "is_ready": true,
            "is_accident": false,
            "time": "26.01.2024 13:10:23",
            "bbo_id": 4
        }
    ]
}

export default Statistics
