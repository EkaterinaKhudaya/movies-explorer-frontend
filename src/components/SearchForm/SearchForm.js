import './SearchForm.css'
import searchIcon from "../../images/serchIcon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {useFormWithValidation} from "../ValidationForm/validation";

import React from 'react';

function SearchForm(props) {
    const {values, handleChange, errors} = useFormWithValidation();

     function handleSubmit(e) {
        e.preventDefault();
        props.handleLoadData(values.search)
    }

    return (
        <div className="search">
            <form className="search__form" onSubmit={handleSubmit}>
                <div className="search__icon">
                    <img src={searchIcon} alt="Лупа" className="search__icon-image"/>
                </div>
                <input type="text" name="search" value={values.search || ''}
                       required onChange={handleChange} className="search__input" placeholder="Фильм"/>
                 {errors?.search && <span className="error">Нужно ввести ключевое слово</span>}
                <button type="submit" className="search__button" >Найти</button>
            </form>
            <div className="search__filter">
                <FilterCheckbox handleShortFilm={props.handleShortFilm} handleLoadData={props.handleLoadData}/>
            </div>
        </div>
    )

}

export default SearchForm
