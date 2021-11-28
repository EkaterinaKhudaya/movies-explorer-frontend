import React from "react";
import {Link} from "react-router-dom";
import './Register.css'
import logoPath from "../../images/logo.svg";
import {useFormWithValidation} from "../ValidationForm/validation"

function Register(props) {
    const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        props.onRegistartion(
            {
                name: values.name,
                email: values.email,
                password: values.password
            })
        resetForm()
    }

    return (
        <main className="register">
            <section className="register__container">
                <div className="register__logo">
                    <Link to="/">
                        <img src={logoPath} alt="Логотип проекта" className="register__logo-image"/>
                    </Link>
                </div>
                <form className="register__form" onSubmit={handleSubmit}>
                    <div className="register__userdata">
                        <h2 className="register__heading">Добро пожаловать!</h2>
                        <div className="register__input">
                            <label className="register__field">Имя</label>
                            <input className="register__item" type="text"
                                   id="name-input" value={values.name || ''} onChange={handleChange}
                                   name="name" minLength="2" required/>
                            {errors?.name?.length > 0 && <span className="error">{errors.name}</span>}
                        </div>

                        <div className="register__input">
                            <label className="register__field">Email</label>
                            <input className="register__item" type="email"
                                   pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$"
                                   id="email-input" value={values.email || ''} onChange={handleChange}
                                   name="email" minLength="2" required/>
                            {errors?.email?.length > 0 && <span className="error">{errors.email}</span>}
                        </div>
                        <div className="register__input">
                            <label className="register__field">Пароль</label>
                            <input className="register__item" type="password"
                                   id="password-input" value={values.password || ''} onChange={handleChange}
                                   name="password" minLength="8" required/>
                            {errors?.password?.length > 0 && <span className="error">{errors.password}</span>}
                        </div>
                    </div>
                    <div className="register__submit">
                        <input className={isValid ? "register__button" : "register__button_disabled"} type="submit"
                               value="Зарегистрироваться" disabled={!isValid}/>
                        <div className="register__action">
                            <p className="register__question">Уже зарегистрированы?</p>
                            <Link to="signin" className="register__link">Войти</Link>
                        </div>

                    </div>
                </form>
            </section>
        </main>
    )
}

export default Register
