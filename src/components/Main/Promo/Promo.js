import './Promo.css'
import landingLogo from '../../../images/landing-logo.svg'

function Promo() {
    return (
        <section className="promo">
            <div className="promo__info">
                <div className="promo__data">
                    <h1 className="promo__title">
                        Учебный проект студента факультета Веб-разработки
                    </h1>
                    <span className="promo__subtitle">
                    Листайте ниже, чтобы узнать больше про этот проект и его создателя
                </span>
                </div>
                <button className="promo__button" type="button">
                    <a href="#aboutProject" className="promo__known-more">Узнать больше</a>
                </button>
            </div>
            <img src={landingLogo} alt="Логотип проекта" className="promo__logo"/>
        </section>
    )
}

export default Promo
