import logoPath from "../../images/logo.svg";
import {Link} from "react-router-dom";
import React from "react";
import './Login.css'

function Login(props) {
    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.onLogin(
            {
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
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
                                   id="email-input" ref={emailRef}
                                   name="email" minLength="2" required/>
                            <span className="sign__error sign__error_visible"/>
                        </div>
                        <div className="sign__input">
                            <label className="sign__field">Пароль</label>
                            <input className="sign__item" type="password"
                                   id="password-input" ref={passwordRef}
                                   name="password" minLength="8" required/>
                            <span className="sign__error sign__error_visible"/>
                        </div>
                    </div>
                    <div className="sign__submit">
                        <input className="sign__button" type="submit" value="Войти"/>
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
