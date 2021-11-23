import './Profile.css'
import React from 'react';
import {Link} from "react-router-dom";

function Profile() {
    function editUserData() {

    }

    return (
        <section className="profile">
            <h1 className="profile__username">Привет, Виталий!</h1>
            <form className="profile__userData" onSubmit={editUserData}>
                <div className="profile__nameData">
                    <label className="profile__field">Имя</label>
                    <input type="text" value="Виталий" className="profile__input"></input>
                </div>
                <div className="profile__emailData">
                    <label className="profile__field">Email</label>
                    <input type="text" value="test@test.ru" className="profile__input"/>
                </div>

                <div className="profile__actions">
                    <input type="submit" className="profile__button-edit" value="Редактировать"/>
                    <Link to="sign-in" className="profile__exit-link">Выйти из аккуанта</Link>

                </div>
            </form>
        </section>
    )

}

export default Profile
