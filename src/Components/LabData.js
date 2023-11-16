import React, {useEffect, useState} from "react"

import styles from "../styles/ProjectParams.module.css"
import {Button, ConfigProvider, Form, InputNumber, message, Modal, Select, Table} from "antd";
import {columns, convertFormValues} from "../helpers/labDataConst";
import {useLabDataActions} from "../actions/lab.actions";
import {convertTableData} from "../helpers/labDataConst";
import {API} from "../helpers/const";

const LabData = () => {

    const [form] = Form.useForm();
    const labDataActions = useLabDataActions()

    const [tableData, setTableData] = useState(null)
    const [formValues, setFormValues] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const errorGet = () => {
        messageApi.open({
            type: 'error',
            content: `Ошибка подключения к серверу ${API}/get_all_lab_value`,
        });
    };

    const errorPost = () => {
        messageApi.open({
            type: 'error',
            content: `Ошибка подключения к серверу ${API}/post_lab_value`,
        });
    };


    useEffect(() => {
        labDataActions.getAllParams()
            .then((data) => {
                form.setFieldsValue(convertFormValues(data))
                setTableData(convertTableData(data))
            })
            .catch(() => errorGet())
    }, []);


    const handleForm = async () => {
        await labDataActions.postLabData(formValues)
            .then((data) => {
                setTableData(convertTableData(data))
            })
            .catch(() => errorPost())
    }

    return (
        <>
            {contextHolder}
            <div className={styles.container}>
                <h3 className={styles.title}>Лабораторные данные</h3>

                <div className={styles.innerContainer}>
                    <ConfigProvider theme={{
                        token: {
                            fontFamily: "Euclid Circular A",
                        }
                    }}>
                        <Form className={styles.form} onFinish={(values) => {
                            setIsModalOpen(true)
                            setFormValues(values)
                        }} form={form}>
                            <Form.Item label="Номер ББО: " className={styles.formItem} name="bbo_id" rules={[{ required: true}]}>
                                <Select>
                                    <Select.Option value={1}>1</Select.Option>
                                    <Select.Option value={2}>2</Select.Option>
                                    <Select.Option value={3}>3</Select.Option>
                                    <Select.Option value={4}>4</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="Доза ила по массе в аэротенке: " className={styles.formItem}>
                                <Form.Item name="doseFromWeight" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={50}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                г/дм³
                            </span>
                            </Form.Item>

                            <Form.Item label="Доза ила по объему: " className={styles.formItem}>
                                <Form.Item name="doseFromVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={1100}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                см³/дм³
                            </span>
                            </Form.Item>

                            <Form.Item label="Зольность ила: " className={styles.formItem}>
                                <Form.Item name="ashPercent" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={70}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                %
                            </span>
                            </Form.Item>

                            <Form.Item label="Концентрация избыточного активного ила: " className={styles.formItem}>
                                <Form.Item name="concentrationExcessActive" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={60}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                г/дм³
                            </span>
                            </Form.Item>

                            <Form.Item label="Содержание взвешенных веществ в исходной воде: " className={styles.formItem} >
                                <Form.Item name="suspendSubstSourceWater" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={20000}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                            </Form.Item>

                            <Form.Item label="Содержание взвешенных веществ после п/о" className={styles.formItem}>
                                <Form.Item name="suspendSubstAfterSettling" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={20000}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                            </Form.Item>

                            <Form.Item label="Содержание взвешенных веществ в очищенной воде" className={styles.formItem}>
                                <Form.Item name="suspendSubstInPurified" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={20000}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                            </Form.Item>

                            <Form.Item label="БПК₅ на входе ОС" className={styles.formItem}>
                                <Form.Item name="bpkInputOS" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={20000}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                мгО₂/дм³
                            </span>
                            </Form.Item>

                            <Form.Item label="ХПК на входе аэротенка" className={styles.formItem}>
                                <Form.Item name="xpkInputAero" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={20000}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                мгО₂/дм³
                            </span>
                            </Form.Item>

                            <Form.Item label="БПК₅ на входе аэротенка" className={styles.formItem}>
                                <Form.Item name="bpkInputAero" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={20000}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                мгО₂/дм³
                            </span>
                            </Form.Item>

                            <Form.Item label="БПК₅ на выходе аэротенка" className={styles.formItem}>
                                <Form.Item name="bpkOutputAero" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={20000}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                мгО₂/дм³
                            </span>
                            </Form.Item>

                            <Form.Item label="Азот аммонийный на входе аэротенка" className={styles.formItem}>
                                <Form.Item name="nitrogenAmmoniumInputAero" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={1000}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                            </Form.Item>

                            <Form.Item label="Азот аммонийный на выходе аэротенка" className={styles.formItem}>
                                <Form.Item name="nitrogenAmmoniumOutputAero" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={1000}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                            </Form.Item>

                            <Form.Item label="Азот нитритов на входе аэротенка" className={styles.formItem}>
                                <Form.Item name="nitrogenNitriteInputAero" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={1000}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                            </Form.Item>

                            <Form.Item label="Азот нитритов на выходе аэротенка" className={styles.formItem}>
                                <Form.Item name="nitrogenNitriteOutputAero" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={1000}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                            </Form.Item>

                            <Form.Item label="Азот нитратов на входе аэротенка" className={styles.formItem}>
                                <Form.Item name="nitrogenNitrateInputAero" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={1000}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                            </Form.Item>

                            <Form.Item label="Азот нитратов на выходе аэротенка" className={styles.formItem}>
                                <Form.Item name="nitrogenNitrateOutputAero" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={1000}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                            </Form.Item>

                            <Form.Item label="Общий азот на входе БО" className={styles.formItem}>
                                <Form.Item name="totalNitrogenInputBO" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={1000}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                            </Form.Item>

                            <Form.Item label="Органический азот на выходе аэротенков (азот по Кьельдалю)" className={styles.formItem}>
                                <Form.Item name="organicNitrogenOutputAero" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={1000}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                            </Form.Item>

                            <Form.Item label="Общий фосфор после первичных отстойников (выход)" className={styles.formItem}>
                                <Form.Item name="totalPhosphorusOutput" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={1000}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                            </Form.Item>

                            <Form.Item label="Общий фосфор на выходе участка БО" className={styles.formItem}>
                                <Form.Item name="totalPhosphorusOutputBO" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber min={0} max={1000}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                                мг/дм³
                            </span>
                            </Form.Item>

                            <Button type="primary" htmlType="submit" style={{backgroundColor: "#00A3E7", fontWeight: 500}}>
                                Отправить
                            </Button>
                        </Form>

                        <Table columns={columns} dataSource={tableData} bordered pagination={false}/>
                    </ConfigProvider>

                </div>

                <Modal title="Подтверждение операции"
                       open={isModalOpen}
                       onOk={() => {
                           setIsModalOpen(false)
                           handleForm()
                       }}
                       onCancel={() => setIsModalOpen(false)}
                       cancelText="Отмена"
                       okText="Подтвердить"
                >
                    <p>Вы уверены в добавлении лабораторных данных?</p>
                </Modal>
            </div>
        </>
    )
}

export default LabData
