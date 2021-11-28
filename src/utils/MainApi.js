class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl
    }

    signUp(data) {
        return fetch(this._baseUrl + `signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: data.name,
                password: data.password,
                email: data.email
            })
        }).then((res) => this._getResponseData(res))
    }

    signIn(data) {
        return fetch(this._baseUrl + `signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password: data.password,
                email: data.email
            })
        }).then((res) => this._getResponseData(res))
    }


    getUserInfo() {
        return fetch(this._baseUrl + 'users/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: getToken()
            }
        })
            .then((res) => this._getResponseData(res))
    }

    editProfile(data) {
        return fetch(this._baseUrl + 'users/me', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: getToken()
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        }).then((res) => this._getResponseData(res))

    }

    getSavedMovies() {
        return fetch(this._baseUrl + 'movies', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: getToken()
            }
        })
            .then((res) => this._getResponseData(res))
    }

    addMovie(data) {
        return fetch(this._baseUrl + 'movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: getToken()
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: `https://api.nomoreparties.co${data.image.url}`,
                trailer: data.trailerLink,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
                thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
                movieId: data.id,
            })
        }).then((res) => this._getResponseData(res))
    }

    deleteMovie(data) {
        return fetch(this._baseUrl + `movies/${data._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: getToken()
            },
        }).then((res) => this._getResponseData(res))
    }


    _getResponseData(res) {
        if (!res.ok) {
            return res.text().then((result) =>
                Promise.reject({status: `${res.status}`, message: JSON.parse(result).message})
            )


        }
        return res.json();
    }

}

const getToken = () => {
    const token = localStorage.getItem('token')
    return `Bearer ${token}`
}


export const apiMain = new MainApi({
    baseUrl: 'https://api.moviesekaterinakh.space/',

});
