import logoPath from "../../images/logo.svg";
import {Link} from "react-router-dom";
import React from "react";
import './Login.css'
import {useFormWithValidation} from "../ValidationForm/validation"

function Login(props) {
    const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        props.onLogedIn(
            {
                email: values.email,
                password: values.password
            })
        resetForm()
    }

    return (
        <main className="sign">
            <section className="sign__container">
                <div className="sign__logo">
                    <Link to="/">
                        <img src={logoPath} alt="Логотип проекта" className="sign__logo-image"/>
                    </Link>
                </div>
                <form className="sign__form" onSubmit={handleSubmit}>
                    <div className="sign__userdata">
                        <h2 className="sign__heading">Рады видеть!</h2>
                        <div className="sign__input">
                            <label className="sign__field">Email</label>
                            <input className="sign__item" type="email"
                                   pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$"
                                   id="email-input" value={values.email || ''} onChange={handleChange}
                                   name="email" minLength="2" required/>
                           {errors?.email?.length > 0 && <span className="error">{errors.email}</span>}
                        </div>
                        <div className="sign__input">
                            <label className="sign__field">Пароль</label>
                            <input className="sign__item" type="password"
                                   id="password-input" value={values.password || ''} onChange={handleChange}
                                   name="password" minLength="8" required/>
                            {errors?.password?.length > 0 && <span className="error">{errors.password}</span>}
                        </div>
                    </div>
                    <div className="sign__submit">
                        <input  className={isValid ? "sign__button":"sign__button_disabled"} type="submit" value="Войти"  disabled={!isValid}/>
                        <div className="sign__action">
                            <p className="sign__question">Ещё не зарегистрированы?</p>
                            <Link to="signup" className="sign__link">Регистрация</Link>
                        </div>

                    </div>
                </form>
            </section>
        </main>
    )
}

export default Login
