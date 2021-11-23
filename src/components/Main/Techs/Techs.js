import './Techs.css'

function Techs() {
    return (
        <section className="techs">
            <div className="techs__header">
                <h2 className="techs__title">Технологии</h2>
            </div>
            <div className="techs__info">
                <h3 className="techs__info_title">7 технологий</h3>
                <p className="techs__info_subtitle">На курсе веб-разработки мы освоили технологии, которые применили в
                    дипломном проекте.</p>
            </div>
            <div className="techs__list">
                <div className="techs__list_item">HTML</div>
                <div className="techs__list_item">CSS</div>
                <div className="techs__list_item">JS</div>
                <div className="techs__list_item">React</div>
                <div className="techs__list_item">Git</div>
                <div className="techs__list_item">Express.js</div>
                <div className="techs__list_item">mongoDB</div>
            </div>

        </section>
    )
}

export default Techs
