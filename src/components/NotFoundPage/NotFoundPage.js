import React from 'react'
import './NotFoundPage.css'
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <main className="not-found-page">
            <div className="not-found-page__container">
                <h1 className="not-found-page_title">404</h1>
                <p className="not-found-page_info">Страница не найдена</p>
            </div>
            <Link to="/" className="not-found-page_link">Назад</Link>


        </main>
    )
};

export default NotFoundPage
