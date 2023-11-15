import React, {useEffect} from 'react'
import styles from "../styles/ModuleManagementAirflow.module.css"
import {Button, ConfigProvider, Form, InputNumber, Select} from "antd";
import {useRecoilState} from "recoil";
import {moduleAtom} from "../state/module";

const W3CWebSocket = require('websocket').w3cwebsocket;
const client = new W3CWebSocket('ws://192.168.2.42:8000/ws/air-flow/');

const ModuleManagementAirflow = () => {

    const [form] = Form.useForm();

    const [messages, setMessages] = useRecoilState(moduleAtom)


    useEffect(() => {
        if (messages.length !== 0) {
            form.setFieldsValue({
                bbo_id: [...messages].pop()?.data.bbo_id,
                deviation_rate: [...messages].pop()?.data.deviation_rate
            })
        }
    }, [])

    client.onopen = () => {
        console.log('WebSocket Client Connected');
    };

    client.onmessage = (event) => {
        if ('data' in JSON.parse(event.data)) {
            setMessages((messages) => [...messages, JSON.parse(event.data)]);
        }

    };
    client.onerror = function () {
        console.log('Connection Error');
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Модуль управления подачей и распределением воздуха</h3>

            <div className={styles.innerContainer}>
                <ConfigProvider theme={{
                    token: {
                        fontFamily: "Euclid Circular A",
                    }
                }}>
                    <Form className={styles.form} onFinish={(values) => {
                        console.log(values)
                    }} form={form}>
                        <Form.Item label="Номер ББО: " className={styles.formItem} name="bbo_id"
                                   rules={[{required: true}]}>
                            <Select>
                                <Select.Option value={1}>1</Select.Option>
                                <Select.Option value={2}>2</Select.Option>
                                <Select.Option value={3}>3</Select.Option>
                                <Select.Option value={4}>4</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="Базовое значение Kб: " className={styles.formItem}>
                            <Form.Item name="base_value" noStyle
                                       rules={[{required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="Допустимое отклонение ΔK концентрации: " className={styles.formItem}>
                            <Form.Item name="deviation_rate" noStyle
                                       rules={[{required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="Коэффициент значимости биоблока: " className={styles.formItem}>
                            <Form.Item name="bbo_rate" noStyle
                                       rules={[{required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber min={0} max={1}/>
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="Нижнее предельное значение концентрации кислорода в ББО: "
                                   className={styles.formItem}>
                            <Form.Item name="min_oxygen_concentration" noStyle
                                       rules={[{required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="Верхнее предельное значение концентрации кислорода в ББО: "
                                   className={styles.formItem}>
                            <Form.Item name="max_oxygen_concentration" noStyle
                                       rules={[{required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="Cредняя расчитанная потребность в кислороде: " className={styles.formItem}>
                            <Form.Item name="avg_oxygen_demand" noStyle
                                       rules={[{required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мг/л
                            </span>
                        </Form.Item>

                        <Button type="primary" htmlType="submit" style={{backgroundColor: "#00A3E7", fontWeight: 500}}>
                            Отправить
                        </Button>
                    </Form>

                    {/*<Table columns={columns} dataSource={tableData} bordered pagination={false}/>*/}
                </ConfigProvider>

            </div>
        </div>
    )
}

export default ModuleManagementAirflow
