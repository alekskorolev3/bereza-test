import React from 'react'
import styles from '../styles/Modules.module.css'
import {Form, InputNumber} from "antd";

const SettingsGatesDistributorBowl = () => {
    const [form] = Form.useForm();

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Настройка затворов распределительной чаши</h3>

            <Form className={styles.form} onFinish={(values) => {
                console.log(values)
            }} form={form}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Form.Item label="Затвор к ББО 1: " className={styles.formItem}>
                        <Form.Item name="shutter_bbo_1" noStyle
                                   rules={[{required: true, message: "Необходимо ввести значение"}]}>
                            <InputNumber min={0} max={100}/>
                        </Form.Item>
                        <span className={styles.formSuffix}>
                                %
                            </span>
                    </Form.Item>

                    <Form.Item label="Затвор к ББО 2: " className={styles.formItem}>
                        <Form.Item name="shutter_bbo_2" noStyle
                                   rules={[{required: true, message: "Необходимо ввести значение"}]}>
                            <InputNumber min={0} max={100}/>
                        </Form.Item>
                        <span className={styles.formSuffix}>
                                %
                            </span>
                    </Form.Item>

                    <Form.Item label="Затвор к ББО 3: " className={styles.formItem}>
                        <Form.Item name="shutter_bbo_3" noStyle
                                   rules={[{required: true, message: "Необходимо ввести значение"}]}>
                            <InputNumber min={0} max={100}/>
                        </Form.Item>
                        <span className={styles.formSuffix}>
                                %
                            </span>
                    </Form.Item>

                    <Form.Item label="Затвор к ББО 4: " className={styles.formItem}>
                        <Form.Item name="shutter_bbo_4" noStyle
                                   rules={[{required: true, message: "Необходимо ввести значение"}]}>
                            <InputNumber min={0} max={100}/>
                        </Form.Item>
                        <span className={styles.formSuffix}>
                                %
                            </span>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

export default SettingsGatesDistributorBowl
