import './Header.css'
import logoPath from "../../images/logo.svg";
import accountIcon from "../../images/accountIcon.svg";
import menuIcon from "../../images/menuIcon.svg";
import {Link, useLocation} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import React from 'react';

function Header(props) {
    const currentPath = useLocation();

    const [screenWidth, setScreenWidth] = React.useState(0);
    React.useEffect(() => {
        window.addEventListener('resize', (event) => {
            setScreenWidth(event.target.innerWidth)
        })
    }, []);

    const handleMenuClick = () => {
        console.log(props.isNavigationMenuOpen)
        props.toggleNavigationMenu(!props.isNavigationMenuOpen);
    };

    function getLocation() {
        return currentPath.pathname
    }


    return (
        <header className={`${getLocation() === "/" ? 'header__main' : ''}
        ${getLocation() === '/signin' || getLocation() === '/signup' ? 'header_sign' : 'header'}`}>
            <Link to="/">
                <img src={logoPath} alt="Логотип проекта" className="header__logo"/>
            </Link>
            {(getLocation() === '/movies' || getLocation() === "/saved-movies" || getLocation() === "/profile") && screenWidth > 768 ?
                <Navigation/>
                : ''}
            {(getLocation() === '/movies' || getLocation() === "/saved-movies" || getLocation() === "/profile") && screenWidth > 768 ?
                <Link to="profile" className="header__account">
                    <p className="header__account-link">Аккаунт</p>
                    <div className="header__account-image">
                        <img src={accountIcon} alt="Фигурка человека"/>
                    </div>
                </Link>
                : ''}
            {(getLocation() === '/movies' || getLocation() === "/saved-movies" || getLocation() === "/profile") && screenWidth <= 768 ?
                <img src={menuIcon} alt="иконка меню навигации" className="header__navigation-menu"
                     onClick={handleMenuClick}/>
                : ''}
            {getLocation() === "/" ?
                <div className="header__info">
                    <Link to="signup" className="header__link">Регистрация</Link>

                    <div className="header__button">
                        <Link to="signin" className="header__link header__link_button">Войти</Link>
                    </div>
                </div> : ''}
        </header>
    )
}

export default Header
