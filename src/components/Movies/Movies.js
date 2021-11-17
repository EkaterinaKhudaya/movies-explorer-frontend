import SearchForm from "../SearchForm/SearchForm";
import './Movies.css'
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
    return (
        <main className="movies">
            <section className="movies__search">
                <SearchForm/>
            </section>

            <section className="movies-cards">
                <MoviesCardList/>
            </section>
            <section className="movies__load">
                <button type="button" className="movies__load-button">Ещё</button>
            </section>
        </main>
    )
}

export default Movies
