import MovieCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css'
import movieImage from '../../images/movieImage.png'

function MoviesCardList() {
    const cardsList = [
        {
            id: 1,
            name: '33 слова о дизайне',
            duration: '1ч 42м',
            image: movieImage
        },
        {
            id: 2,
            name: '33 слова о дизайне',
            duration: '1ч 42м',
            image: movieImage
        },
        {
            id: 3,
            name: '33 слова о дизайне',
            duration: '1ч 42м',
            image: movieImage
        },
        {
            id: 4,
            name: '33 слова о дизайне',
            duration: '1ч 42м',
            image: movieImage
        },
        {
            id: 5,
            name: '33 слова о дизайне',
            duration: '1ч 42м',
            image: movieImage
        },
        {
            id: 6,
            name: '33 слова о дизайне',
            duration: '1ч 42м',
            image: movieImage
        },
         {
            id: 7,
            name: '33 слова о дизайне',
            duration: '1ч 42м',
            image: movieImage
        },
    ]
    return (
        <ul className="movies-cards__list">
            {cardsList.map((item) =>
                <div className="movies-cards__list-item">
                    <MovieCard key={item['id']} card={item} />
                </div>
            )}
        </ul>

    )
}

export default MoviesCardList
