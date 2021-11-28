import './SearchForm.css'
import searchIcon from "../../images/serchIcon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import React from 'react';


function SearchForm(props) {
    const searchRef = React.useRef();
    const [isErrorMessage, setIsErrorMessage] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (searchRef.current.value.length > 0) {
            props.handleLoadData(searchRef.current.value)
        } else {
            setIsErrorMessage(true)
        }

    }

    return (
        <div className="search">
            <form className="search__form" onSubmit={handleSubmit}>
                <div className="search__icon">
                    <img src={searchIcon} alt="Лупа" className="search__icon-image"/>
                </div>
                <label className="search__input">
                <input type="text" name="search" ref={searchRef} onChange={() => setIsErrorMessage(false)}
                       className="search__input" placeholder="Фильм"/>
                       <span className="error">{ isErrorMessage ? 'Нужно ввести ключевое':'' }</span>
                       </label>

                <button type="submit" className="search__button">Найти</button>
            </form>

            <div className="search__filter">
                <FilterCheckbox handleShortFilm={props.handleShortFilm} handleLoadData={props.handleLoadData}
                                shortFilms={props.shortFilms}/>
            </div>
        </div>
    )

}

export default SearchForm
