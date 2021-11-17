import './NavigationPopup.css'
import {Link, useLocation} from "react-router-dom";
import accountIcon from "../../images/accountIcon.svg";
import React from "react";

function NavigationPopup(props) {
    const currentPath = useLocation()

    function getLocation() {
        return currentPath.pathname
    }


    return (
        <section className={`navigationMenu ${props.isOpen ? 'navigationMenu__opened' : ''}`}>
            <div className="navigationMenu__container">
                <button className="navigationMenu__close-button" type="button"
                        onClick={props.onClose}/>
                <ul className="navigationMenu_list">
                    <li className="navigationMenu__item">
                        <Link to="/" onClick={props.onClose}
                              className="navigationMenu__link">Главная</Link>
                    </li>
                    <li className="navigationMenu__item">
                        <Link to="movies" onClick={props.onClose}
                              className={`navigationMenu__link ${getLocation() === '/movies' ? 'navigationMenu__link_active' : ''}`}>Фильмы</Link>
                    </li>
                    <li className="navigationMenu__item">
                        <Link to="saved-movies" onClick={props.onClose}
                              className={`navigationMenu__link ${getLocation() === '/saved-movies' ? 'navigationMenu__link_active' : ''}`}>Сохранённые
                            фильмы</Link>
                    </li>
                </ul>
                <Link to="profile" className="navigationMenu__account" onClick={props.onClose}>
                    <p className="navigationMenu__account-link">Аккаунт</p>
                    <div className="navigationMenu__account-image">
                        <img src={accountIcon} alt="Фигурка человека"/>
                    </div>
                </Link>
            </div>
        </section>

    )
}

export default NavigationPopup
