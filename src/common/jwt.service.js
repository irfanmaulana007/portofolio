const DUMMY_TOKEN_KEY = 'PORTOFOLIO_TOKEN_KEY'
const DUMMY_TOKEN_USERID = 'PORTOFOLIO_TOKEN_USERID'
const DUMMY_TOKEN_USERNAME = 'PORTOFOLIO_TOKEN_USERNAME'

export const setToken = (token) => {
    window.localStorage.setItem('TOKEN_KEY', token)
}

export const getToken = () => {
    // setToken(DUMMY_TOKEN_KEY)
    // setUserID(DUMMY_TOKEN_USERID)
    // setUsername(DUMMY_TOKEN_USERNAME)
    return window.localStorage.getItem('TOKEN_KEY')
}

export const setUserID = (id) => {
    window.localStorage.setItem('TOKEN_USERID', id)
}

export const getUserID = () => {
    return window.localStorage.getItem('TOKEN_USERID')
}

export const setUsername = (username) => {
    window.localStorage.setItem('TOKEN_USERNAME', username)
}

export const getUsername = () => {
    return window.localStorage.getItem('TOKEN_USERNAME')
}

export const destroyToken = () => {
		localStorage.clear()
}