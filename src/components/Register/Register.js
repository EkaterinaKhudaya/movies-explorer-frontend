import React from 'react';
import {Link} from "react-router-dom";
import './Register.css'
import logoPath from "../../images/logo.svg";

function Register(props) {
    const nameRef = React.useRef();
    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.onRegistartion(
            {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
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
                                   id="name-input" ref={nameRef}
                                   name="name" minLength="2" required/>
                            <span className="register__error register__error_visible"/>
                        </div>

                        <div className="register__input">
                            <label className="register__field">Email</label>
                            <input className="register__item" type="email"
                                   id="email-input" ref={emailRef}
                                   name="email" minLength="2" required/>
                            <span className="register__error register__error_visible"/>
                        </div>
                        <div className="register__input">
                            <label className="register__field">Пароль</label>
                            <input className="register__item" type="password"
                                   id="password-input" ref={passwordRef}
                                   name="password" minLength="8" required/>
                            <span className="register__error register__error_visible"/>
                        </div>
                    </div>
                    <div className="register__submit">
                        <input className="register__button" type="submit" value="Зарегистрироваться"/>
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
