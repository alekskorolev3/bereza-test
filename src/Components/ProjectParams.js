import React, {useEffect, useState} from 'react'
import styles from "../styles/ProjectParams.module.css"
import {Button, ConfigProvider, Form, InputNumber, message, Modal, Select, Table} from "antd";
import {useProjectActions} from "../actions/project.actions";
import {columns, convertFormValues, convertTableData} from "../helpers/projectParamsConst";
import {API} from "../helpers/const";

const ProjectParams = () => {

    const [form] = Form.useForm();
    const projectActions = useProjectActions();

    const [tableData, setTableData] = useState(null)
    const [formValues, setFormValues] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const errorGet = () => {
        messageApi.open({
            type: 'error',
            content: `Ошибка подключения к серверу ${API}/get_all_proj_value`,
        });
    };

    const errorPost = () => {
        messageApi.open({
            type: 'error',
            content: `Ошибка подключения к серверу ${API}/post_proj_value`,
        });
    };

    useEffect(() => {
        projectActions.getAllParams()
            .then((data) => {
                form.setFieldsValue(convertFormValues(data));
                setTableData(convertTableData(data))
            })
            .catch(() => errorGet())
    }, [])


    const handleForm = async () => {
        await projectActions.postProjectParams(formValues)
            .then((data) => {
                setTableData(convertTableData(data))
            })
            .catch(() => errorPost())
    }

    return (
        <>
            {contextHolder}
            <div className={styles.container}>
                <h3 className={styles.title}>Проектные параметры сооружения</h3>

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
                            <Form.Item label="Номер ББО: " className={styles.formItem} name="bbo_id"
                                       rules={[{required: true}]}>
                                <Select>
                                    <Select.Option value={1}>1</Select.Option>
                                    <Select.Option value={2}>2</Select.Option>
                                    <Select.Option value={3}>3</Select.Option>
                                    <Select.Option value={4}>4</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="Рабочая глубина аэротенка: " className={styles.formItem}>
                                <Form.Item name="tankHeight" noStyle
                                           rules={[{required: true, message: "Необходимо ввести корректное значение"}]}>
                                    <InputNumber min={0}/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                        м
                    </span>
                            </Form.Item>

                            <Form.Item label="Гидравлическая схема функционирования аэротенка: " name="tankSchema"
                                       className={styles.formItem}>
                                <Select style={{width: "fit-content"}}
                                        rules={[{required: true, message: "Необходимо выбрать значение"}]}>
                                    <Select.Option value="смес.">смес.</Select.Option>
                                    <Select.Option value="вытесн.">вытесн.</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="Площадь аэротенка: " className={styles.formItem}>
                                <Form.Item name="tankArea" noStyle
                                           rules={[{required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                        м²
                    </span>
                            </Form.Item>

                            <Form.Item label="Объем аэротенка: " className={styles.formItem}>
                                <Form.Item name="tankVolume" noStyle
                                           rules={[{required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                        м³
                    </span>
                            </Form.Item>

                            <Form.Item label="Объем зон нитрификации: " className={styles.formItem}>
                                <Form.Item name="nitrificationVolume" noStyle
                                           rules={[{required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                        м³
                    </span>
                            </Form.Item>

                            <Form.Item label="Объем зон денитрификации: " className={styles.formItem}>
                                <Form.Item name="denitrificationVolume" noStyle
                                           rules={[{required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                        м³
                    </span>
                            </Form.Item>

                            <Form.Item label="Объем анаэробной зоны " className={styles.formItem}>
                                <Form.Item name="anaerobicsVolume" noStyle
                                           rules={[{required: true, message: "Необходимо ввести значение"}]}>
                                    <InputNumber/>
                                </Form.Item>
                                <span className={styles.formSuffix}>
                        м³
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
                           setIsModalOpen(false);
                           handleForm()
                       }}
                       onCancel={() => setIsModalOpen(false)}
                       cancelText="Отмена"
                       okText="Подтвердить"
                >
                    <p>Вы уверены в изменении проектных параметров сооружения?</p>
                </Modal>
            </div>
        </>
    )
}

export default ProjectParams
