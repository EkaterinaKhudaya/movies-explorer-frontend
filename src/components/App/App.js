import React from 'react';
import Header from "../Header/Header";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import {Switch, Route, useHistory, useLocation, Redirect} from 'react-router-dom';
import './App.css'
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import NavigationPopup from "../NavigationPopup/NavigationPopup";
import {apiMain} from "../../utils/MainApi";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
    const currentPath = useLocation();
    const history = useHistory();
    const [isHeader, setIsHeader] = React.useState(true);
    const [isNavigationMenuOpen, setNavigationMenu] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({})
    const [infoMessage, setInfoMessage] = React.useState('')
    const [isSuccessMessage, setMessageType] = React.useState(false)
    const [isInfoPopupOpen, setIsPopupOpen] = React.useState(false)
    const [listSavedMovies, setListSavedMovies] = React.useState([])


    React.useEffect(() => {
        if (!localStorage.getItem('savedMovies') || !localStorage.getItem('userInfo')) {
            getUserData()
            getSavedMovies()
        } else {
            setListSavedMovies(JSON.parse(localStorage.getItem('savedMovies')))
            setCurrentUser(JSON.parse(localStorage.getItem('userInfo')))
        }
    }, []);


    const getToken = () => {
        return !!localStorage.getItem('token')
    }


    function getLocation() {
        return currentPath.pathname
    }

    function changeIsHeader(data) {
        setIsHeader(data)
    }


    function handleLoginUser(data) {
        apiMain.signIn(data)
            .then((response) => {
                localStorage.setItem('token', response.token)
            })
            .then(() => {
                getUserData()
                history.push('/movies')
            })
            .then(() => getSavedMovies())
            .catch((error) => {
                if (error.status === '400') {
                    setInfoMessage('Введены некорректные данные')
                } else {
                    setInfoMessage('Невозможна авторизировать пользователя, проверьте логин или пароль')
                }
                setMessageType(false)
                setIsPopupOpen(true)
                console.log(error)
            })
    }

    function handleLogoutUser() {
        localStorage.clear()
    }


    function getUserData() {
        apiMain.getUserInfo()
            .then((response) => {
                setCurrentUser(response.data)
                localStorage.setItem('userInfo', JSON.stringify(response.data))
            })
            .catch((error) => console.log(error))
    }

    function handleUpdateUser(data) {
        apiMain.editProfile(data)
            .then((response) => {
                    setInfoMessage('Данные успешно изменены')
                    setMessageType(true)
                    setIsPopupOpen(true)
                    setCurrentUser(response.data)
                    localStorage.setItem('userInfo', JSON.stringify(response.data))
                }
            )
            .catch((error) => {
                    setInfoMessage(error.message)
                    setMessageType(false)
                    setIsPopupOpen(true)
                }
            )
    }

    function openNavigationMenu(data) {
        setNavigationMenu(data)
    }


    function closeAllPopups() {
        setNavigationMenu(false)
        setIsPopupOpen(false)
    }

    function handleRegistrationUser(data) {
        apiMain.signUp(data)
            .then((response) => {
                handleLoginUser(response.data)
            })
            .catch((error) => {
                if (error.status === '400') {
                    setInfoMessage('Введены некорректные данные')
                } else {
                    setInfoMessage('Невозможно зарегистрировать пользователя')
                }
                setMessageType(false)
                setIsPopupOpen(true)
            })
    }

    function handleSaveMovie(data) {
        apiMain.addMovie(data)
            .then((response) => {
                setListSavedMovies([...listSavedMovies, response])
                localStorage.setItem('savedMovies', JSON.stringify([...listSavedMovies, response]))
            })
            .catch((error) => {
                setInfoMessage('Невозможно сохранить фильм!')
                setMessageType(false)
                setIsPopupOpen(true)
                console.log(error)
            })
    }

    function handleDeleteMovie(data) {
        console.log(data)
        apiMain.deleteMovie(data)
            .then((response) => {
                let filter = listSavedMovies.filter((item) => item._id !== response._id)
                setListSavedMovies(filter)
                localStorage.setItem('savedMovies', JSON.stringify(filter))
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function getSavedMovies() {
        apiMain.getSavedMovies()
            .then((response) => {
                let user = JSON.parse(localStorage.getItem('userInfo'))
                let filter = response.filter((item) => item.owner === user._id)
                setListSavedMovies(filter)
                localStorage.setItem('savedMovies', JSON.stringify(filter))
            })
            .catch((error) => {
                console.log(error)
            })

    }


    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                {(((getToken() && isHeader)) || getLocation() === '/') &&
                <Header toggleNavigationMenu={openNavigationMenu} isNavigationMenuOpen={isNavigationMenuOpen}
                        loggedIn={getToken()}/>}
                <Switch>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <ProtectedRoute path="/movies" savedMovies={listSavedMovies}
                                    loggedIn={getToken()}
                                    component={Movies}
                                    handleSaveMovie={handleSaveMovie}
                                    handleDeleteMovie={handleDeleteMovie}/>

                    <ProtectedRoute path="/saved-movies"
                                    loggedIn={getToken()}
                                    component={SavedMovies}
                                    listSavedMovies={listSavedMovies}
                                    handleGetSavedMovies={getSavedMovies}
                                    handleDeleteMovie={handleDeleteMovie}/>
                    <Route path="/signup">
                        {getToken() ? <Redirect to="/"/> : <Register onRegistartion={handleRegistrationUser}/>}
                    </Route>

                    <Route path="/signin">
                        {getToken() ? <Redirect to="/"/> : <Login onLogedIn={handleLoginUser}/>}

                    </Route>

                    <ProtectedRoute path="/profile"
                                    loggedIn={getToken()}
                                    component={Profile}
                                    getUserData={getUserData}
                                    onLogedOut={handleLogoutUser}
                                    userData={currentUser}
                                    onEditProfile={handleUpdateUser}/>
                    <Route path="*">
                        <NotFoundPage changeIsHeader={changeIsHeader}/>
                    </Route>
                </Switch>
                {getToken() && <Footer/>}
                <NavigationPopup isOpen={isNavigationMenuOpen} onClose={closeAllPopups}/>
                <InfoTooltip isOpen={isInfoPopupOpen}
                             onClose={closeAllPopups}
                             message={infoMessage}
                             isSuccess={isSuccessMessage}/>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
