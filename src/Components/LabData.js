import React, {useState} from "react"

import styles from "../styles/ProjectParams.module.css"
import {Button, ConfigProvider, Form, InputNumber, Modal, Select, Table} from "antd";

const LabData = () => {
    const columns = [
        {
            title: 'Номер ББО',
            dataIndex: 'name',
        },
        {
            title: '1',
            dataIndex: '1',
        },
        {
            title: '2',
            dataIndex: '2',
        },
        {
            title: '3',
            dataIndex: '3',
        },
        {
            title: '4',
            dataIndex: '4',
        }
    ]
    const initialData = [
        {
            key: '1',
            name: 'Доза ила по массе в аэротенке, г/дм³',
            1: '3',
            2: '5',
            3: '4',
            4: '6'
        },
        {
            key: '2',
            name: 'Доза ила по объему, см³/дм³',
            1: '1',
            2: '2',
            3: '3',
            4: '4'
        },
        {
            key: '3',
            name: 'Зольность ила, %',
            1: '25',
            2: '26',
            3: '27',
            4: '28'
        },
        {
            key: '4',
            name: 'Концентрация избыточного активного ила, г/дм³',
            1: '456',
            2: '502',
            3: '482',
            4: '532'
        },
        {
            key: '5',
            name: 'Содержание взвешенных веществ в исходной воде, мг/дм³',
            1: '25',
            2: '27',
            3: '34',
            4: '18'
        },
        {
            key: '6',
            name: 'Содержание взвешенных веществ после п/о, мг/дм³ ',
            1: '12',
            2: '35',
            3: '17',
            4: '26'
        },
        {
            key: '7',
            name: 'Содержание взвешенных веществ в очищенной воде, мг/дм³ ',
            1: '257',
            2: '302',
            3: '285',
            4: '324'
        },
        {
            key: '8',
            name: 'БПК₅ на входе ОС, мгО₂/дм³ ',
            1: '257',
            2: '302',
            3: '285',
            4: '324'
        },
        {
            key: '9',
            name: 'ХПК на входе аэротенка, мгO₂/дм³ ',
            1: '257',
            2: '302',
            3: '285',
            4: '324'
        },
        {
            key: '10',
            name: 'БПК₅ на входе аэротенка, мгО₂/дм³ ',
            1: '257',
            2: '302',
            3: '285',
            4: '324'
        },
        {
            key: '11',
            name: 'БПК₅ на выходе аэротенка, мгО₂/дм³ ',
            1: '257',
            2: '302',
            3: '285',
            4: '324'
        },
        {
            key: '12',
            name: 'Азот аммонийный на входе аэротенка, мг/дм³ ',
            1: '257',
            2: '302',
            3: '285',
            4: '324'
        },
        {
            key: '13',
            name: 'Азот аммонийный на выходе аэротенка, мг/дм³ ',
            1: '257',
            2: '302',
            3: '285',
            4: '324'
        },
        {
            key: '14',
            name: 'Азот нитритов на входе аэротенка, мг/дм³ ',
            1: '257',
            2: '302',
            3: '285',
            4: '324'
        },
        {
            key: '15',
            name: 'Азот нитритов на выходе данного, мг/дм³ ',
            1: '257',
            2: '302',
            3: '285',
            4: '324'
        },
        {
            key: '16',
            name: 'Азот нитратов на входе аэротенка, мг/дм³ ',
            1: '257',
            2: '302',
            3: '285',
            4: '324'
        },
        {
            key: '17',
            name: 'Азот нитратов на выходе данного, мг/дм³ ',
            1: '257',
            2: '302',
            3: '285',
            4: '324'
        },
        {
            key: '18',
            name: 'Общий азот на входе БО, мг/дм³ ',
            1: '257',
            2: '302',
            3: '285',
            4: '324'
        },
        {
            key: '19',
            name: 'Органический азот на выходе аэротенков (азот по Кьельдалю), мг/дм³ ',
            1: '257',
            2: '302',
            3: '285',
            4: '324'
        },
        {
            key: '20',
            name: 'Общий фосфор после первичных отстойников (выход), мг/дм³ ',
            1: '257',
            2: '302',
            3: '285',
            4: '324'
        },
        {
            key: '21',
            name: 'Общий фосфор на выходе участка БО, мг/дм³ ',
            1: '257',
            2: '302',
            3: '285',
            4: '324'
        },
    ];

    const [data, setData] = useState(initialData)
    const [values, setValues] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    React.useEffect(() => {
        form.setFieldsValue({
            bbo: '1',
            doseFromWeight: 3,
            doseFromVolume: 5,
            ashPercent: 117,
            concentrationExcessActive: 456,
            suspendSubstSourceWater: 25,
            suspendSubstAfterSettling: 12,
            suspendSubstInPurified: 257,
            bpkInputOS: 12,
            xpkInputAero: 12,
            bpkInputAero: 12,
            bpkOutputAero: 12,
            nitrogenAmmoniumInputAero: 12,
            nitrogenAmmoniumOutputAero: 12,
            nitrogenNitriteInputAero: 12,
            nitrogenNitriteOutputAero: 12,
            nitrogenNitrateInputAero: 12,
            nitrogenNitrateOutputAero: 12,
            totalNitrogenInputBO: 12,
            organicNitrogenOutputAero: 12,
            totalPhosphorusOutput: 12,
            totalPhosphorusOutputBO: 12
        });
    }, []);

    const handleOk = () => {
        setIsModalOpen(false);
        handleForm()
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        setIsModalOpen(true)
        setValues(values)
    };

    const handleForm = () => {
        const list = Object.entries(values)

        const newData = data.map((row,i) => {
            return {...row, [list[0][1]]: list[i + 1][1]}
        })

        setData(newData)
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Лабораторные данные</h3>

            <div className={styles.innerContainer}>
                <ConfigProvider theme={{
                    token: {
                        fontFamily: "Euclid Circular A",
                    }
                }}>
                    <Form className={styles.form} onFinish={onFinish} form={form}>
                        <Form.Item label="Номер ББО: " className={styles.formItem} name="bbo" rules={[{ required: true}]}>
                            <Select>
                                <Select.Option value="1">1</Select.Option>
                                <Select.Option value="2">2</Select.Option>
                                <Select.Option value="3">3</Select.Option>
                                <Select.Option value="4">4</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="Доза ила по массе в аэротенке: " className={styles.formItem}>
                            <Form.Item name="tankHeight" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                г/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="Доза ила по объему: " className={styles.formItem}>
                            <Form.Item name="tankArea" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                см³/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="Зольность ила: " className={styles.formItem}>
                            <Form.Item name="tankVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber max={100}/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                %
                            </span>
                        </Form.Item>

                        <Form.Item label="Концентрация избыточного активного ила: " className={styles.formItem}>
                            <Form.Item name="nitrificationVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                г/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="Содержание взвешенных веществ в исходной воде: " className={styles.formItem} >
                            <Form.Item name="denitrificationVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="Содержание взвешенных веществ после п/о" className={styles.formItem}>
                            <Form.Item name="anaerobicsVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="Содержание взвешенных веществ в очищенной воде" className={styles.formItem}>
                            <Form.Item name="anaerobicsVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="БПК₅ на входе ОС" className={styles.formItem}>
                            <Form.Item name="anaerobicsVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мгО₂/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="ХПК на входе аэротенка" className={styles.formItem}>
                            <Form.Item name="anaerobicsVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мгО₂/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="БПК₅ на входе аэротенка" className={styles.formItem}>
                            <Form.Item name="anaerobicsVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мгО₂/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="БПК₅ на выходе аэротенка" className={styles.formItem}>
                            <Form.Item name="anaerobicsVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мгО₂/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="Азот аммонийный на входе аэротенка" className={styles.formItem}>
                            <Form.Item name="anaerobicsVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="Азот аммонийный на выходе аэротенка" className={styles.formItem}>
                            <Form.Item name="anaerobicsVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="Азот нитритов на входе аэротенка" className={styles.formItem}>
                            <Form.Item name="anaerobicsVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="Азот нитритов на выходе аэротенка" className={styles.formItem}>
                            <Form.Item name="anaerobicsVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="Азот нитратов на входе аэротенка" className={styles.formItem}>
                            <Form.Item name="anaerobicsVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="Азот нитратов на выходе аэротенка" className={styles.formItem}>
                            <Form.Item name="anaerobicsVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="Общий азот на входе БО" className={styles.formItem}>
                            <Form.Item name="anaerobicsVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="Органический азот на выходе аэротенков (азот по Кьельдалю)" className={styles.formItem}>
                            <Form.Item name="anaerobicsVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="Общий фосфор после первичных отстойников (выход)" className={styles.formItem}>
                            <Form.Item name="anaerobicsVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                        </Form.Item>

                        <Form.Item label="Общий фосфор на выходе участка БО" className={styles.formItem}>
                            <Form.Item name="anaerobicsVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                        </Form.Item>

                        <Button type="primary" htmlType="submit" style={{backgroundColor: "#00A3E7", fontWeight: 500}}>
                            Отправить
                        </Button>
                    </Form>

                    <Table columns={columns} dataSource={data} bordered pagination={false}/>
                </ConfigProvider>

            </div>

            <Modal title="Подтверждение операции"
                   open={isModalOpen}
                   onOk={handleOk}
                   onCancel={handleCancel}
                   cancelText="Отмена"
                   okText="Подтвердить"
            >
                <p>Вы уверены в добавлении лабораторных данных?</p>
            </Modal>
        </div>
    )
}

export default LabData
