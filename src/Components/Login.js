import React, {useEffect, useState} from 'react'
import styles from "../styles/Login.module.css"
import {useForm} from "react-hook-form";
import {useUserActions} from "../actions/user.actions";
import {useRecoilValue} from "recoil";
import {authAtom} from "../state/auth";
import {useNavigate} from "react-router";
import MoonLoader from "react-spinners/MoonLoader";
import {message} from 'antd';
import {Link} from "react-router-dom";

const Login = () => {

    const auth = useRecoilValue(authAtom);
    const userActions = useUserActions();
    const [loading, setLoading] = useState(false)
    const {register, handleSubmit, formState: {errors}, setError} = useForm();

    const navigate = useNavigate();

    const [messageApi, contextHolder] = message.useMessage();
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Возникла ошибка подключения к серверу',
        });
    };

    useEffect(() => {
        if (auth !== null) {
            navigate("/data")
        }
    }, [])

    function onSubmit({username, password}) {

        setLoading(true)

        return userActions.login(username, password)
            .then((data) => {
                if (!auth) {
                    console.log(data)
                    error()
                } else {
                    navigate("/data")
                }

                setLoading(false)
            })
            .catch(error => {
                setError('apiError', {message: error});
            });
    }

    return (
        <>
            {contextHolder}
            <div className={styles.container}>
                <div className={styles.card}>
                    <span className={styles.title}>Авторизация</span>
                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="username">Логин</label>
                            <input type="text" id="login" {...register("username", {required: true})}/>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Пароль</label>
                            <input type="password" id="password" {...register("password", {required: true})}/>
                        </div>

                        <div className={styles.registerContainer}>
                            Нет аккаунта?
                            <Link to="/register">Зарегистрироваться</Link>
                        </div>

                        <button className={styles.submitButton} onClick={handleSubmit(onSubmit)}>
                            Войти
                            <MoonLoader loading={loading} size={22} color="#FFFFFF"/>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
