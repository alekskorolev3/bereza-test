import React, {useEffect, useState} from 'react'
import styles from "../styles/Login.module.css"
import {useForm} from "react-hook-form";
import {useRecoilValue} from "recoil";
import {authAtom} from "../state/auth";
import {useUserActions} from "../actions/user.actions";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {message} from "antd";
import MoonLoader from "react-spinners/MoonLoader";

const Register = () => {

    const auth = useRecoilValue(authAtom);
    const userActions = useUserActions();
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }, setError } = useForm();

    const navigate = useNavigate();

    const [messageApi, contextHolder] = message.useMessage();
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Возникла ошибка подключения к серверу',
        });
    };

    useEffect(() => {
        if (auth) {
            navigate("/data")
        }
    }, [])

    function onSubmit({ username, password }) {

        setLoading(true)

        return userActions.register(username, password)
            .then((data) => {
                if (!data) {
                    error()
                }
                else {
                    setLoading(true)
                    navigate("/login")
                }
            })
            .catch(error => {
                setError('apiError', { message: error });
            });
    }

    return (
        <>
            {contextHolder}
            <div className={styles.container}>
                <div className={styles.card}>
                    <span className={styles.title}>Регистрация</span>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="username">Логин</label>
                            <input type="text" id="username" {...register("username", { required: true})}/>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Пароль</label>
                            <input type="password" id="password" {...register("password", { required: true})}/>
                        </div>

                        <div className={styles.registerContainer}>
                            Есть аккаунт?
                            <Link to="/login">Войти</Link>
                        </div>

                        <button className={styles.submitButton} onClick={handleSubmit(onSubmit)}>
                            Регистрация
                            <MoonLoader loading={loading} size={22} color="#FFFFFF"/>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
