import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React from "react";
import Preloader from "../Preloader/Preloader";
import SearchError from "../SearchError/SearchError";
import {SearchMovies} from "../FilterData/FilterData";


function SavedMovies(props) {
    const {
        changeCardsList,
        shortFilms,
        cardsSearch,
        cardsList,
        fullList,
        isEmptyFilter,
        isPreloader,
        handleSearchMovies,
        handleShortFilm
    } = SearchMovies()

    React.useEffect(() => {
        changeCardsList(props.listSavedMovies)
    }, [props.listSavedMovies])

    const handleSearch = (data) => {
        handleSearchMovies(data, props.listSavedMovies)
    }

     const handleSearchShortFilm = (data) => {
        handleShortFilm(data)
        if (fullList.length > 0) {
            handleSearch(cardsSearch)
        }

    }


    return (
        <main className="saved-movies">
            <section className="saved-movies__search">
                <SearchForm handleLoadData={handleSearch}
                            handleShortFilm={handleSearchShortFilm}
                            shortFilms={shortFilms}/>
            </section>
            <section className="saved-movies__cards">
                {isPreloader && <Preloader/>}
                {(isEmptyFilter) &&
                <SearchError isFilterError={isEmptyFilter}/>}
                <MoviesCardList cardsList={cardsList?.length > 0 ? cardsList : isEmptyFilter ? [] : fullList}
                                savedMovies={props.listSavedMovies}
                                handleGetSavedMovies={props.handleGetSavedMovies}
                                handleDeleteMovie={props.handleDeleteMovie}/>
            </section>
        </main>
    )
}

export default SavedMovies
