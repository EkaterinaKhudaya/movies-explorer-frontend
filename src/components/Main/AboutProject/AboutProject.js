import './AboutProject.css'

function AboutProject() {
    return (
        <section className="aboutProject" >
            <a name="aboutProject" href="#"></a>
            <div className="aboutProject__header">
                <h2 className="aboutProject__title">О проекте</h2>
            </div>
            <div className="aboutProject__info">
                <div className="aboutProject__baseData">
                    <h3 className="aboutProject__baseData_title">Дипломный проект включал 5 этапов</h3>
                    <p className="aboutProject__baseData_subtitle">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
                        доработки.</p>
                </div>
                <div className="aboutProject__baseData">
                    <h3 className="aboutProject__baseData_title">На выполнение диплома ушло 5 недель</h3>
                    <p className="aboutProject__baseData_subtitle">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
                        защититься.</p>
                </div>
            </div>
            <div className="aboutProject__timeline">
                <div className="aboutProject__timeline_backend">
                    <div className="aboutProject__timeline_block aboutProject__dark-theme">
                        <p className="aboutProject__timeline_title">1 неделя</p>
                    </div>
                    <span className="aboutProject__timeline_subtitle">Back-end</span>
                </div>
                <div  className="aboutProject__timeline_frontend">
                    <div className="aboutProject__timeline_block aboutProject__light-theme">
                        <p className="aboutProject__timeline_title">4 недели</p>
                    </div>
                    <span className="aboutProject__timeline_subtitle">Front-end</span>
                </div>
            </div>
        </section>
    )
}

export default AboutProject
