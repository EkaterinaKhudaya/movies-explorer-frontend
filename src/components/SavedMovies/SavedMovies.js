import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React from "react";
import Preloader from "../Preloader/Preloader";
import SearchError from "../SearchError/SearchError";
import {SearchMovies} from "../FilterData/FilterData";


function SavedMovies(props) {
    const {cardsList, fullList, isEmptyFilter, isPreloader, handleSearchMovies, getFullList, handleShortFilm} = SearchMovies()


    React.useEffect(() => {
        getFullList(props.listSavedMovies)
    }, [props.listSavedMovies, getFullList])



    return (
        <main className="saved-movies">
            <section className="saved-movies__search">
                <SearchForm handleLoadData={handleSearchMovies} handleShortFilm={handleShortFilm}/>
            </section>
            <section className="saved-movies__cards">
                {isPreloader && <Preloader/>}
                {(isEmptyFilter) &&
                <SearchError isFilterError={isEmptyFilter}/>}
                <MoviesCardList cardsList={cardsList?.length>0 ? cardsList: isEmptyFilter ? []:fullList}
                                savedMovies={props.listSavedMovies}
                                handleGetSavedMovies={props.handleGetSavedMovies}
                                handleDeleteMovie={props.handleDeleteMovie}/>
            </section>
        </main>
    )
}

export default SavedMovies
