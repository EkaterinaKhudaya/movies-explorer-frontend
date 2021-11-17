import './Portfolio.css'
import arrowLink from "../../../images/link-arrow.svg";

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio__projects">
                <h4 className="portfolio__projects_title">Портфолио</h4>
                <ul className="portfolio__projects-list">
                    <li className="portfolio__projects-list-item">
                        <p className="portfolio__projects-list-item_title">Статичный сайт</p>
                        <a href="https://ekaterinakhudaya.github.io/russian-travel/" target="blank">
                            <img src={arrowLink} alt="стрелка, ведущая на статичный сайт"
                                 className="portfolio__projects-list-item_image"/>
                        </a>
                    </li>
                    <li className="portfolio__projects-list-item">
                        <p className="portfolio__projects-list-item_title">Адаптивный сайт</p>
                        <a href="https://ekaterinakhudaya.github.io/mesto/" target="blank">
                            <img src={arrowLink} alt="стрелка, ведущая на адаптивный сайт"
                                 className="portfolio__projects-list-item_image"/>
                        </a>
                    </li>
                    <li className="portfolio__projects-list-item">
                        <p className="portfolio__projects-list-item_title">Одностраничное приложение</p>
                        <a href="https://ekaterina.kh.nomoredomains.monster/" target="blank">
                            <img src={arrowLink} alt="стрелка, ведущая на одностраничное приложение"
                                 className="portfolio__projects-list-item_image"/>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio
