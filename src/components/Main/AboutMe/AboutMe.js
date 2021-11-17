import './AboutMe.css'
import studentPhoto from "../../../images/photo.png";

function AboutMe() {
    return (
        <section className="aboutMe">
            <div className="aboutMe__header">
                <h2 className="aboutMe__title">Студент</h2>
            </div>
            <div className="aboutMe__info">
                <div className="aboutMe__userdata">

                    <h3 className="aboutMe__userdata_title">Виталий</h3>
                    <p className="aboutMe__userdata_subtitle">Фронтенд-разработчик, 30 лет</p>
                    <p className="aboutMe__userdata_info">Я родился и живу в Саратове, закончил факультет экономики
                        СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
                        работал
                        в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
                        фриланс-заказами и ушёл с постоянной работы.</p>

                    <ul className="aboutMe__links-list">
                        <li className="aboutMe__list-item">
                            <a href="https://ru-ru.facebook.com/" target="blank" className="aboutMe__link">Facebook</a>
                        </li>
                        <li className="aboutMe__list-item">
                            <a href="https://github.com/EkaterinaKhudaya" target="blank"
                               className="aboutMe__link">Github</a>
                        </li>
                    </ul>
                </div>
                <img src={studentPhoto} alt="Фотография студента" className="aboutMe__photo"/>
            </div>

        </section>
    )
}

export default AboutMe
