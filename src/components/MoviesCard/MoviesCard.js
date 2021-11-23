import "./MoviesCard.css"
import React from 'react';
import {useLocation} from "react-router-dom";

function MovieCard(props) {
    const [isSave, setIsSaves] = React.useState(false)
    const cardLikeButtonClassName = `movie-card__like-button ${isSave ? 'movie-card__like-button_active' : ''}`;
    const currentPath = useLocation()

    function getLocation() {
        return currentPath.pathname
    }

    function clickToSave() {
        let save = isSave
        setIsSaves(!save)
    }

    function deleteCard() {

    }

    return (
        <div className="movie-card">
            <div className="movie-card__info">
                <div className="movie-card__about">
                    <h3 className="movie-card__title">{props.card.name}</h3>
                    <span className="movie-card__duration">{props.card.duration}</span>
                </div>
                {getLocation() === '/movies' ?
                    <button className={cardLikeButtonClassName} type="button" onClick={clickToSave}/> : ""
                }
                {getLocation() === '/saved-movies' ?
                    <button className="movie-card__delete" type="button" onClick={deleteCard}/> : ""
                }
            </div>

            <img src={props.card.image} alt="" className="movie-card__image"/>

        </div>
    )
}

export default MovieCard
