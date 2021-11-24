import MovieCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';
import React from 'react';

function MoviesCardList(props) {
     React.useEffect(() => {
         if ( props.handleGetSavedMovies) {
               props.handleGetSavedMovies()
         }

     },  []);




    return (
        <ul className="movies-cards__list">
            {props.cardsList && props.cardsList.map((item, index) =>
                <div className="movies-cards__list-item" key={item.id}>
                    <MovieCard  card={item}
                               savedMovies={props.savedMovies}
                               handleSaveMovie={props.handleSaveMovie}
                               handleDeleteMovie={props.handleDeleteMovie}/>
                </div>
            )}
        </ul>

    )
}

export default MoviesCardList
