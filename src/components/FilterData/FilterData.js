import React, {useCallback} from "react";


export function SearchMovies() {
    const [fullList, setFullList] = React.useState(null);
    const [cardsList, setCardsList] = React.useState(null);
    const [cardsSearch, setCardsSearch] = React.useState('');
    const [isPreloader, setIsPreloader] = React.useState(false);
    const [isEmptyFilter, setIsEmptyFilter] = React.useState(false);
    const [shortFilms, setShortFilms] = React.useState(false);
 const [page, setPage] = React.useState(1);

    const handleSearchMovies = (data) => {
        console.log(shortFilms)
        setIsPreloader(true)
        setPage(1)
        setCardsSearch(data)
        let cardsFilter = []
        if (shortFilms) {
            cardsFilter = fullList.filter((item) =>
                item.nameRU.toLowerCase().includes(data.toLowerCase()) && item.duration < 40
            )
        } else {
            cardsFilter = fullList.filter((item) =>
                item.nameRU.toLowerCase().includes(data.toLowerCase())
            )
        }

        setIsPreloader(false)
        if (cardsFilter.length === 0) {
            setIsEmptyFilter(true)
        } else {
            setIsEmptyFilter(false)
        }
        setCardsList(cardsFilter)
    }

    const handleShortFilm = (isShortForm) => {
         setShortFilms(isShortForm);
    }


    const getFullList = useCallback(
        (fullList = []) => {
            setFullList(fullList);

        }, [setFullList]);

    const getIsShortFilm = useCallback(
        (isShortFilm=true) => {
            console.log(isShortFilm)
            setShortFilms(isShortFilm);

        }, [setShortFilms]);

     const changePage = useCallback(
        (page) => {
            setPage(page);

        }, [setPage]);




    return {cardsList,fullList, isEmptyFilter, cardsSearch, isPreloader, handleSearchMovies, getFullList, getIsShortFilm, handleShortFilm, page, changePage, shortFilms};
}

