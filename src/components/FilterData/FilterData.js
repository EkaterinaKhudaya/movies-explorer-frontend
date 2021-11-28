import React, {useCallback} from "react";


export function SearchMovies() {
    const [fullList, setFullList] = React.useState([]);
    const [cardsList, setCardsList] = React.useState([]);
    const [cardsSearch, setCardsSearch] = React.useState('');
    const [isPreloader, setIsPreloader] = React.useState(false);
    const [isEmptyFilter, setIsEmptyFilter] = React.useState(false);
    const [shortFilms, setShortFilms] = React.useState(false);
    const [page, setPage] = React.useState(1);

    const handleSearchMovies =  (data, movieList) => {
        setPage(1)
        setCardsSearch(data)
        setFullList(movieList)
        let cardsFilter = []
        if (shortFilms) {
            cardsFilter = movieList.filter((item) =>
                item.nameRU.toLowerCase().includes(data.toLowerCase()) && item.duration < 40
            )
        } else {
            cardsFilter = movieList.filter((item) =>
                item.nameRU.toLowerCase().includes(data.toLowerCase())
            )
        }

        if (cardsFilter.length === 0) {
            setIsEmptyFilter(true)
        } else {
            setIsEmptyFilter(false)
        }
        setCardsList(cardsFilter)

        // changeIsPreloader(false)
    }

    const handleShortFilm = (isShortForm) => {
        setShortFilms(isShortForm);
    }


    const changeIsPreloader = useCallback(
        (isPreloader) => {
            console.log(isPreloader)
            setIsPreloader(isPreloader);

        }, [setIsPreloader]);


    const getFullList =
        (data) => {
            setFullList(data);
        };

    const getIsShortFilm = useCallback(
        (isShortFilm = true) => {
            setShortFilms(isShortFilm);

        }, [setShortFilms]);

    const changeCardsList = useCallback(
        (cards) => {
           setCardsList(cards)

        }, [setCardsList]);

    const changePage = useCallback(
        (page) => {
            setPage(page);

        }, [setPage]);


    return {
        changeIsPreloader,
        changeCardsList,
        isPreloader,
        cardsList,
        fullList,
        isEmptyFilter,
        cardsSearch,
        handleSearchMovies,
        getFullList,
        getIsShortFilm,
        handleShortFilm,
        page,
        changePage,
        shortFilms
    };
}

