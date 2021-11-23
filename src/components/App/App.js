import React from 'react';
import Header from "../Header/Header";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import {Switch, Route} from 'react-router-dom';
import './App.css'
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import NavigationPopup from "../NavigationPopup/NavigationPopup";


function App() {
    const [isNavigationMenuOpen, setNavigationMenu] = React.useState(false);


    function openNavigationMenu(data) {
        setNavigationMenu(data)
    }

    function closeAllPopups() {
        setNavigationMenu(false)
    }


    return (
        <div className="page">
            <Switch>
                <Route exact path="/">
                    <Header toggleNavigationMenu={openNavigationMenu} isNavigationMenuOpen={isNavigationMenuOpen}/>
                    <Main/>
                    <Footer/>
                </Route>
                <Route path="/movies">
                    <Header toggleNavigationMenu={openNavigationMenu} isNavigationMenuOpen={isNavigationMenuOpen}/>
                    <Movies/>
                    <Footer/>
                </Route>
                <Route path="/saved-movies">
                    <Header toggleNavigationMenu={openNavigationMenu} isNavigationMenuOpen={isNavigationMenuOpen}/>
                    <SavedMovies/>
                    <Footer/>
                </Route>
                <Route path="/signup">
                    <Register/>
                </Route>
                <Route path="/signin">
                    <Login/>
                </Route>
                <Route path="/profile">
                    <Header toggleNavigationMenu={openNavigationMenu} isNavigationMenuOpen={isNavigationMenuOpen}/>
                    <Profile/>
                    <Footer/>
                </Route>
                <Route path="*">
                    <NotFoundPage/>
                </Route>
            </Switch>
            <NavigationPopup isOpen={isNavigationMenuOpen} onClose={closeAllPopups}/>
        </div>
    );
}

export default App;
