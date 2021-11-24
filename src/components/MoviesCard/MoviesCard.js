import "./MoviesCard.css"
import React from 'react';
import {useLocation} from "react-router-dom";

function MovieCard(props) {
    const [isSave, setIsSaves] = React.useState(false)
    const currentPath = useLocation()
    React.useEffect(() => {
        checkIsCardSave()
    }, [])

    function clickOnCardSave() {
        isSave ? props.handleDeleteMovie(getSavedCardId()) : props.handleSaveMovie(props.card)
        checkIsCardSave()
    }

    function checkIsCardSave() {
        const card = props.savedMovies.find((item) => item.movieId === props.card.id)
        setIsSaves(!!card?.movieId)
    }

    function getSavedCardId() {
        return props.savedMovies.find((item) => item.movieId === props.card.id)
    }


    function getLocation() {
        return currentPath.pathname
    }

    function durationTime(data) {
        const hours = Math.floor(data / 60);
        const minutes = data % 60;
        if (hours > 0) {
            return `${hours}ч ${minutes}м`
        } else {
            return `${minutes}м`
        }

    }

    return (
        <div className="movie-card">
            <div className="movie-card__info">
                <div className="movie-card__about">
                    <h3 className="movie-card__title">{props.card.nameRU}</h3>
                    <span className="movie-card__duration">{durationTime(props.card.duration)}</span>
                </div>
                {getLocation() === '/movies' ?
                    <button className={`movie-card__like-button ${isSave ? 'movie-card__like-button_active' : ''}`}
                            type="button"
                            onClick={() => clickOnCardSave()}/> : ""
                }
                {getLocation() === '/saved-movies' ?
                    <button className="movie-card__delete" type="button"
                            onClick={() => props.handleDeleteMovie(props.card)}/> : ""
                }
            </div>

            <a href={props.card.trailerLink || props.card.trailer} target="blanc" className="movie-card__image-link">
                <img
                    src={props.card.image.url ? `https://api.nomoreparties.co${props.card.image.url}` : props.card.image}
                    alt=""
                    className="movie-card__image"/>
            </a>

        </div>
    )
}

export default MovieCard
