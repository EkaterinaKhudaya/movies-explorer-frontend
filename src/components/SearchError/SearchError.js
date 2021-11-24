import './SearchError.css'
import React from "react";


function SearchError(props) {

    return (
        <div className="search-error">
            {props.isServerError &&
            <p className="search-error__item">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите
                немного и попробуйте ещё раз</p>
            }
            {props.isFilterError &&
            <p className="search-error__item">Ничего не найдено</p>
            }


        </div>
    )

}

export default SearchError
