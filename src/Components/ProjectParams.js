import React, {useEffect, useState} from 'react'
import styles from "../styles/ProjectParams.module.css"
import {Select, Form, InputNumber, Button, Table, ConfigProvider, Modal} from "antd";
import {useRecoilValue} from "recoil";
import {authAtom} from "../state/auth";
import {useUserActions} from "../actions/user.actions";
import {useProjectActions} from "../actions/project.actions";
import {projectAtom} from "../state/project";

const ProjectParams = () => {

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
            name: 'Рабочая глубина аэротенка, м',
            1: '3',
            2: '5',
            3: '4',
            4: '6'
        },
        {
            key: '2',
            name: 'Гидравлическая схема функционирования аэротенка ',
            1: 'смес.',
            2: 'смес.',
            3: 'вытесн.',
            4: 'смес.'
        },
        {
            key: '3',
            name: 'Площадь аэротенка, м² ',
            1: '117',
            2: '121',
            3: '106',
            4: '112'
        },
        {
            key: '4',
            name: 'Объем аэротенка, м³ ',
            1: '456',
            2: '502',
            3: '482',
            4: '532'
        },
        {
            key: '5',
            name: 'Объем зон нитрификации, м³ ',
            1: '25',
            2: '27',
            3: '34',
            4: '18'
        },
        {
            key: '6',
            name: 'Объем зон денитрификации, м³ ',
            1: '12',
            2: '35',
            3: '17',
            4: '26'
        },
        {
            key: '7',
            name: 'Объем анаэробной зоны, м³ ',
            1: '257',
            2: '302',
            3: '285',
            4: '324'
        },
    ];

    const project = useRecoilValue(projectAtom);
    const projectActions = useProjectActions();
    const [data, setData] = useState(initialData)
    const [values, setValues] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        projectActions.getAllParams()
            .then((data) => {
                console.log(data)

                const {data_bbo_1} = data

                form.setFieldsValue({
                    bbo_id: parseInt(data_bbo_1.bbo_id),
                    tankHeight: data_bbo_1.tankHeight,
                    tankSchema: data_bbo_1.tankSchema,
                    tankArea: data_bbo_1.tankArea,
                    tankVolume: data_bbo_1.tankVolume,
                    nitrificationVolume: data_bbo_1.nitrificationVolume,
                    denitrificationVolume: data_bbo_1.denitrificationVolume,
                    anaerobicsVolume: data_bbo_1.anaerobicsVolume
                });
                
            })
    }, [])


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
        // const list = Object.entries(values)
        //
        // const newData = data.map((row,i) => {
        //     return {...row, [list[0][1]]: list[i + 1][1]}
        // })
        //
        // setData(newData)

        return projectActions.postProjectParams(values)
            .then((data) => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            });
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Проектные параметры сооружения</h3>

            <div className={styles.innerContainer}>
                <ConfigProvider theme={{
                    token: {
                        fontFamily: "Euclid Circular A",
                    }
                }}>
                    <Form className={styles.form} onFinish={onFinish} form={form}>
                        <Form.Item label="Номер ББО: " className={styles.formItem} name="bbo_id" rules={[{ required: true}]}>
                            <Select>
                                <Select.Option value={1}>1</Select.Option>
                                <Select.Option value={2}>2</Select.Option>
                                <Select.Option value={3}>3</Select.Option>
                                <Select.Option value={4}>4</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="Рабочая глубина аэротенка: " className={styles.formItem}>
                            <Form.Item name="tankHeight" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                        м
                    </span>
                        </Form.Item>

                        <Form.Item label="Гидравлическая схема функционирования аэротенка: " name="tankSchema" className={styles.formItem}>
                            <Select style={{width: "fit-content"}} rules={[{ required: true, message: "Необходимо выбрать значение"}]}>
                                <Select.Option value="смес.">смес.</Select.Option>
                                <Select.Option value="вытесн.">вытесн.</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="Площадь аэротенка: " className={styles.formItem}>
                            <Form.Item name="tankArea" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                        м²
                    </span>
                        </Form.Item>

                        <Form.Item label="Объем аэротенка: " className={styles.formItem}>
                            <Form.Item name="tankVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                        м³
                    </span>
                        </Form.Item>

                        <Form.Item label="Объем зон нитрификации: " className={styles.formItem}>
                            <Form.Item name="nitrificationVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                        м³
                    </span>
                        </Form.Item>

                        <Form.Item label="Объем зон денитрификации: " className={styles.formItem} >
                            <Form.Item name="denitrificationVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
                                <InputNumber/>
                            </Form.Item>
                            <span className={styles.formSuffix}>
                        м³
                    </span>
                        </Form.Item>

                        <Form.Item label="Объем анаэробной зоны " className={styles.formItem}>
                            <Form.Item name="anaerobicsVolume" noStyle rules={[{ required: true, message: "Необходимо ввести значение"}]}>
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
                <p>Вы уверены в изменении проектных параметров сооружения?</p>
            </Modal>
        </div>
    )
}

export default ProjectParams
