import './Footer.css'
import {useLocation} from "react-router-dom";

function Footer() {
    const currentPath = useLocation()

    function getLocation() {
        return currentPath.pathname
    }

    return (
        <footer className={getLocation() === '/signin' || getLocation() === '/signup' ? 'app__footer' : 'footer'}>
            <div className="footer__header">
                <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            </div>
            <div className="footer__info">
                <p className="footer__copyright">&copy;2021.</p>
                <ul className="footer_links">
                    <li className="footer__link">Яндекс.Практикум</li>
                    <li className="footer__link">Github</li>
                    <li className="footer__link">Facebook</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
