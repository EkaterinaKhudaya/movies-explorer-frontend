import SearchForm from "../SearchForm/SearchForm";
import './Movies.css'
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React from 'react';

function Movies() {
    const [loadCards, setLoadCard] = React.useState(1);

    function clickLoadCard() {
        setLoadCard(loadCards+1)
    }

    return (
        <main className="movies">
            <section className="movies__search">
                <SearchForm/>
            </section>

            <section className="movies-cards">
                <MoviesCardList loadCards={loadCards}/>
            </section>
            <section className="movies__load">
                <button type="button" className="movies__load-button" onClick={clickLoadCard}>Ещё</button>
            </section>
        </main>
    )
}

export default Movies
