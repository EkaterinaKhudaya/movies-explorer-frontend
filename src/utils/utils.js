const searchShortFilms = (dataFilm) => {
    return dataFilm.filter((item) => item.duration < 40)
}

export {searchShortFilms}
