import SearchForm from "../SearchForm/SearchForm";
import './Movies.css'
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React from 'react';
import {apiMovies} from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
import SearchError from "../SearchError/SearchError";
import {SearchMovies} from "../FilterData/FilterData";


function Movies(props) {
    const {
        cardsList,
        isEmptyFilter,
        isPreloader,
        handleSearchMovies,
        handleShortFilm,
        getFullList,
        page,
        changePage
    } = SearchMovies()
    const [isErrorFilter, setIsErrorFilter] = React.useState(false);
    const [numberLoadMovies, setNumberLoadMovies] = React.useState(7);

    React.useEffect(() => {
        window.addEventListener('resize', (event)=> setTimeout(changeNumberLoadMovies, 100, event.target.innerWidth));
        return () => {
            document.removeEventListener('resize', (event)=> changeNumberLoadMovies(event.target.innerWidth));
        };
    })
    React.useEffect(() => {
        changeNumberLoadMovies(window.innerWidth)
        setIsErrorFilter(false)
        apiMovies.getMovies()
            .then((response) => {
                getFullList(response)
            })
            .catch((error) => {
                setIsErrorFilter(true)
                console.log(error)
            })
    }, [getFullList])


    const changeNumberLoadMovies = (data) => {
        if (data<=320) {
            setNumberLoadMovies(5)
        } else {
            setNumberLoadMovies(7)
        }
    }

    const clickLoadCard = () => {
        changePage(page + 1)
        checkIsLoadCard()
    }

    const checkIsLoadCard = () => {
        if (!cardsList) {
            return false
        }
        return (page < Math.ceil(cardsList.length / numberLoadMovies) && cardsList.length > numberLoadMovies)
    }


    function sliceCardList() {
        return cardsList.slice(0, numberLoadMovies * page)

    }

    return (
        <main className="movies">
            <section className="movies__search">
                <SearchForm handleLoadData={handleSearchMovies} handleShortFilm={handleShortFilm}/>
            </section>
            <section className="movies-cards">
                {isPreloader && <Preloader/>}
                {(isErrorFilter || isEmptyFilter) &&
                <SearchError isServerError={isErrorFilter} isFilterError={isEmptyFilter}/>}
                <MoviesCardList loadCards={page}
                                cardsList={cardsList ? sliceCardList() : []}
                                savedMovies={props.savedMovies}
                                handleSaveMovie={props.handleSaveMovie}
                                handleDeleteMovie={props.handleDeleteMovie}/>
            </section>
            {checkIsLoadCard()
            &&
            <section className="movies__load">
                <button type="button" className="movies__load-button" onClick={clickLoadCard}>Ещё</button>
            </section>
            }
        </main>
    )
}

export default Movies
