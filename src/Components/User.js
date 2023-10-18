import React, {useState} from 'react'
import styles from "../styles/User.module.css"
import {useRecoilValue} from "recoil";
import {authAtom} from "../state/auth";
import {ConfigProvider, List, Modal, Select} from "antd";
import {NavLink} from "react-router-dom";

const User = () => {

    const auth = useRecoilValue(authAtom)

    const data = [
        {
            username: 'Иван Николаев',
            role: "1"
        },
        {
            username: 'Андрей Петров',
            role: "1"
        },
        {
            username: 'Олег Нечипоренко',
            role: "1"
        },
        {
            username: 'Алексей Ярмолович',
            role: "1"
        },
    ];

    const [list, setList] = useState(data)
    const [isDeleteOpen, setIsDeleteOpen] = useState({data: null, open: false});
    const [isRoleOpen, setIsRoleOpen] = useState({data: null, open: false})

    const onRoleChange = () => {
        setList((prevState) => prevState.map((item) => item.username === isRoleOpen.data.username ? isRoleOpen.data : item))
        setIsRoleOpen((prev) => ({...prev, data: null}))
    }

    const onDelete = () => {
        setList((prevState) => prevState.filter((item) => item.username !== isDeleteOpen.data.username))
    }

    if (auth.authenticatedUser.role === "1") {
        return (
            <div className={styles.container}>
                <h3 className={styles.title}>Панель администратора</h3>

                <ConfigProvider theme={{
                    token: {
                        fontFamily: "Euclid Circular A",
                    }
                }}>
                    <List
                        className={styles.list}
                        pagination={{position: "bottom", align: "start"}}
                        dataSource={list}
                        renderItem={(item, index) => (
                            <List.Item
                                actions={[
                                    <div key="1" className={styles.actionButton}
                                         onClick={() => setIsRoleOpen({data: item, open: true})}>Изменить роль</div>,
                                    <div key="2" className={styles.actionButton}>Сбросить пароль</div>,
                                    <div key="3" className={styles.deleteButton}
                                         onClick={() => setIsDeleteOpen({data: item, open: true})}>Удалить</div>
                                ]}>
                                <List.Item.Meta
                                    key={index}
                                    title={<NavLink to={`/users/${item.role}`} style={{
                                        fontSize: "15px",
                                        color: "#5D676F"
                                    }}>{item.username}</NavLink>}
                                    description={`Роль: ${item.role}`}
                                />
                            </List.Item>
                        )}
                    />
                </ConfigProvider>

                <Modal title="Подтверждение операции"
                       open={isDeleteOpen.open}
                       onOk={() => {
                           setIsDeleteOpen({...isDeleteOpen, open: false});
                           onDelete()
                       }}
                       onCancel={() => setIsDeleteOpen({data: null, open: false})}
                       cancelText="Отмена"
                       okText="Подтвердить"
                >
                    <p>Вы уверены, что хотите удалить пользователя <b>{isDeleteOpen.data?.username}</b>?</p>
                </Modal>

                <Modal title="Изменение роли пользователя"
                       open={isRoleOpen.open}
                       onOk={() => {
                           setIsRoleOpen({...isRoleOpen, open: false});
                           onRoleChange()
                       }}
                       onCancel={() => setIsRoleOpen({data: null, open: false})}
                       cancelText="Отмена"
                       okText="Подтвердить"
                >
                    <p>Имя пользователя: <b>{isRoleOpen.data?.username}</b></p>
                    <Select defaultValue={isRoleOpen.data?.role}
                            onChange={(role) => setIsRoleOpen((prev) => ({...prev, data: {...prev.data, role: role}}))}>
                        <Select.Option value="1">Лаборант</Select.Option>
                        <Select.Option value="2">Инженер</Select.Option>
                        <Select.Option value="3">Администратор</Select.Option>
                    </Select>
                </Modal>
            </div>
        )
    } else return (
        <div className={styles.container}>
            <h3 className={styles.title}>Пользователь</h3>
            <div>Имя пользователя: <b>{auth.authenticatedUser.username}</b></div>
            <div>Роль: <b>{auth.authenticatedUser.role}</b></div>
        </div>
    )
}

export default User
