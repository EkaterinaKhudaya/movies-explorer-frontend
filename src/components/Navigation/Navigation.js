import './Navigation.css'
import {Link, useLocation} from "react-router-dom";

function Navigation() {
    const currentPath = useLocation()

    function getLocation() {
        return currentPath.pathname
    }

    return (
        <ul className="navigation">
            <li className="navigation__item">
                <Link to="movies"
                      className={`navigation__link ${getLocation() === '/movies' ? 'navigation__link_active' : ''}`}>Фильмы</Link>
            </li>
            <li className="navigation__item">
                <Link to="saved-movies"
                      className={`navigation__link ${getLocation() === '/saved-movies' ? 'navigation__link_active' : ''}`}>Сохранённые
                    фильмы</Link>
            </li>
        </ul>
    )
}

export default Navigation
