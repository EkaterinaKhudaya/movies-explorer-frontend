import MovieCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';
import React from 'react';

function MoviesCardList(props) {

    // React.useEffect(() => {
    //     if (props.handleGetSavedMovies) {
    //         props.handleGetSavedMovies()
    //     }
    //
    //
    // }, []);

     function clickOnCardSave(card) {
        props.handleSaveMovie(card)
    }

     function clickOnCardUnSave(card) {
          console.log(props.savedMovies)
        console.log(card)
        props.handleDeleteMovie(card)
    }





    return (
        <ul className="movies-cards__list">
            {props.cardsList && props.cardsList.map((item, index) =>
                <div className="movies-cards__list-item" key={index}>
                    <MovieCard card={item}

                               handleOnCardUnSave ={clickOnCardUnSave}
                               handleOnCardSave={clickOnCardSave}
                               savedMovies={props.savedMovies}
                               handleSaveMovie={props.handleSaveMovie}
                               handleDeleteMovie={props.handleDeleteMovie}/>
                </div>
            )}
        </ul>

    )
}

export default MoviesCardList
