import React from 'react';
import Header from "../Header/Header";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import {Switch, Route, useHistory, useLocation} from 'react-router-dom';
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
    const [isNavigationMenuOpen, setNavigationMenu] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({})
    const [infoMessage, setInfoMessage] = React.useState('')
    const [isSuccessMessage, setMessageType] = React.useState(false)
    const [isInfoPopupOpen, setIsPopupOpen] = React.useState(false)
    const [listSavedMovies, setListSavedMovies] = React.useState([])


    React.useEffect(() => {
        getUserData()
        getSavedMovies()
    }, []);

    const getToken = () => {
        return !!localStorage.getItem('token')
    }



    function getLocation() {
        return currentPath.pathname
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
            .catch((error) => console.log(error))
    }

    function handleLogoutUser() {
        localStorage.clear()
    }


    function getUserData() {
        apiMain.getUserInfo()
            .then((response) => {
                console.log(response)
                setCurrentUser(response.data)
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
                console.log(error)
            })
    }

    function handleSaveMovie(data) {
        apiMain.addMovie(data)
            .then((response) => {
                setListSavedMovies([...listSavedMovies, response])
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function handleDeleteMovie(data) {
        apiMain.deleteMovie(data)
            .then((response) => {
                setListSavedMovies(listSavedMovies.filter((item) => item._id !== response._id))
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function getSavedMovies() {
        apiMain.getSavedMovies()
            .then((response) => {
                setListSavedMovies(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                {(getToken() || getLocation() === '/') &&
                <Header toggleNavigationMenu={openNavigationMenu} isNavigationMenuOpen={isNavigationMenuOpen}/>}
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
                        <Register onRegistartion={handleRegistrationUser}/>
                    </Route>
                    <Route path="/signin">
                        <Login onLogedIn={handleLoginUser}/>
                    </Route>
                    <ProtectedRoute path="/profile"
                                    loggedIn={getToken()}
                                    component={Profile}
                                    getUserData={getUserData}
                                    onLogedOut={handleLogoutUser}
                                    userData={currentUser}
                                    onEditProfile={handleUpdateUser}/>
                    <Route path="*">
                        <NotFoundPage/>
                    </Route>
                </Switch>
                {getToken() && <Footer/>}}
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
