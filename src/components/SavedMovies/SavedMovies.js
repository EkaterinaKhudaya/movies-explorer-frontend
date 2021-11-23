import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css"
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
    return (
        <main className="saved-movies">
            <section className="saved-movies__search">
                <SearchForm/>
            </section>
            <section className="saved-movies__cards">
                <MoviesCardList/>
            </section>
        </main>
    )
}

export default SavedMovies
