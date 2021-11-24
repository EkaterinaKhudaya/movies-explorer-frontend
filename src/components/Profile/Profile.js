import './Profile.css'
import React from 'react';
import {Link} from "react-router-dom";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {useFormWithValidation} from "../ValidationForm/validation"


function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();

    React.useEffect(() => {
        resetForm({name: currentUser.name, email: currentUser.email});
    }, [currentUser, resetForm]);


    function isEditProfile() {
        return isValid && (values.name !== currentUser.name || values.email !== currentUser.email)
    }

    function editUserData(e) {
        e.preventDefault();
        props.onEditProfile(
            {
                name: values.name,
                email: values.email
            })
    }

    return (
        <section className="profile">
            <h1 className="profile__username">Привет, {currentUser.name}!</h1>
            <form className="profile__userData" onSubmit={editUserData}>
                <div className="profile__nameData">
                    <label className="profile__field">Имя</label>
                    <input type="text" value={values.name || ''} name="name" minLength="2" required
                           onChange={handleChange} className="profile__input"/>
                </div>
                {errors?.name?.length > 0 && <span className="error">{errors.name}</span>}
                <div className="profile__emailData">
                    <label className="profile__field">Email</label>
                    <input type="text" value={values.email || ''} name="email" minLength="2" required
                           onChange={handleChange} className="profile__input"/>
                </div>

                <div className="profile__actions">
                    <input type="submit"
                           className="profile__button-edit"
                           value="Редактировать"  disabled={!isEditProfile()}/>
                    <Link to="signin" className="profile__exit-link" onClick={props.onLogedOut}>Выйти из аккуанта</Link>
                </div>
            </form>
        </section>
    )

}

export default Profile
