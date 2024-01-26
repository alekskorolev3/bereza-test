import React from 'react'
import styles from "../styles/Modules.module.css"
import {Button, ConfigProvider, Form, InputNumber, message} from "antd";
import {API} from "../helpers/const";

const ModulePerformanceInnerRecycle = () => {

    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const successPost = () => {
        messageApi.open({
            type: 'success',
            content: `Данные успешно сохранены`,
        });
    };

    const errorPost = () => {
        messageApi.open({
            type: 'error',
            content: `Ошибка подключения к серверу ${API}`,
        });
    };

    return (
        <div className={styles.container}>
            {contextHolder}
            <h3 className={styles.title}>Настройка производительности внутренних рециклов</h3>

            <div>
                <ConfigProvider theme={{
                    token: {
                        fontFamily: "Euclid Circular A",
                    }
                }}>
                    <Form className={styles.form} onFinish={(values) => {
                        console.log(values)
                        errorPost()
                    }} form={form}>

                        <div className={styles.innerContainer}>
                            <div className={styles.formGroup}>

                                <h2>Средний уровень</h2>

                                <Form.Item label="Нижняя граница открытия затвора: " className={styles.formItem}>
                                    <Form.Item name="mid_low_limit_shutter" noStyle
                                               rules={[{required: true, message: "Необходимо ввести значение"}]}>
                                        <InputNumber min={0} max={100}/>
                                    </Form.Item>
                                    <span className={styles.formSuffix}>
                                %
                            </span>
                                </Form.Item>

                                <Form.Item label="Верхняя граница открытия затвора: " className={styles.formItem}>
                                    <Form.Item name="mid_high_limit_shutter" noStyle
                                               rules={[{required: true, message: "Необходимо ввести значение"}]}>
                                        <InputNumber min={0} max={100}/>
                                    </Form.Item>
                                    <span className={styles.formSuffix}>
                                %
                            </span>
                                </Form.Item>

                                <Form.Item label="Нижнее значение частоты работы: " className={styles.formItem}>
                                    <Form.Item name="mid_low_freq_value" noStyle
                                               rules={[{required: true, message: "Необходимо ввести значение"}]}>
                                        <InputNumber min={0} max={1}/>
                                    </Form.Item>
                                    <span className={styles.formSuffix}>
                                Гц
                            </span>
                                </Form.Item>

                                <Form.Item label="Верхнее значение частоты работы: "
                                           className={styles.formItem}>
                                    <Form.Item name="mid_high_freq_value" noStyle
                                               rules={[{required: true, message: "Необходимо ввести значение"}]}>
                                        <InputNumber/>
                                    </Form.Item>
                                    <span className={styles.formSuffix}>
                                Гц
                            </span>
                                </Form.Item>

                                <Button type="primary" htmlType="submit"
                                        style={{backgroundColor: "#00A3E7", fontWeight: 500}}>
                                    Отправить
                                </Button>
                            </div>



                            <div className={styles.formGroup}>
                                <h2>Максимальный уровень</h2>

                                <Form.Item label="Нижняя граница открытия затвора: " className={styles.formItem}>
                                    <Form.Item name="max_low_limit_shutter" noStyle
                                               rules={[{required: true, message: "Необходимо ввести значение"}]}>
                                        <InputNumber min={0} max={100}/>
                                    </Form.Item>
                                    <span className={styles.formSuffix}>
                                %
                            </span>
                                </Form.Item>

                                <Form.Item label="Верхняя граница открытия затвора: " className={styles.formItem}>
                                    <Form.Item name="max_high_limit_shutter" noStyle
                                               rules={[{required: true, message: "Необходимо ввести значение"}]}>
                                        <InputNumber min={0} max={100}/>
                                    </Form.Item>
                                    <span className={styles.formSuffix}>
                                %
                            </span>
                                </Form.Item>

                                <Form.Item label="Нижнее значение частоты работы: " className={styles.formItem}>
                                    <Form.Item name="max_low_freq_value" noStyle
                                               rules={[{required: true, message: "Необходимо ввести значение"}]}>
                                        <InputNumber min={0} max={1}/>
                                    </Form.Item>
                                    <span className={styles.formSuffix}>
                                Гц
                            </span>
                                </Form.Item>

                                <Form.Item label="Верхнее значение частоты работы: "
                                           className={styles.formItem}>
                                    <Form.Item name="max_high_freq_value" noStyle
                                               rules={[{required: true, message: "Необходимо ввести значение"}]}>
                                        <InputNumber/>
                                    </Form.Item>
                                    <span className={styles.formSuffix}>
                                Гц
                            </span>
                                </Form.Item>
                            </div>
                        </div>


                    </Form>

                </ConfigProvider>

            </div>
        </div>
    )
}

export default ModulePerformanceInnerRecycle
