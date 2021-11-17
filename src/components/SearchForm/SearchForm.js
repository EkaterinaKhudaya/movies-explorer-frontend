import './SearchForm.css'
import searchIcon from "../../images/serchIcon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <div className="search">
            <div className="search__form">
                <div className="search__icon">
                    <img src={searchIcon} alt="Лупа" className="search__icon-image"/>
                </div>
                <input type="text" className="search__input" placeholder="Фильм"/>
                <button type="button" className="search__button">Найти</button>
            </div>
            <div className="search__filter">
                <FilterCheckbox/>
            </div>
        </div>
    )

}

export default SearchForm
