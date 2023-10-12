import React from 'react'
import styles from "../styles/Login.module.css"
import {useForm} from "react-hook-form";

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <span className={styles.title}>Регистрация</span>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="login">Логин</label>
                        <input type="text" id="login" {...register("login", { required: true})}/>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Пароль</label>
                        <input type="password" id="password" {...register("password", { required: true})}/>
                    </div>

                    <input type="submit" className={styles.submitButton} value="Зарегистрироваться"/>
                </form>
            </div>
        </div>
    )
}

export default Register
