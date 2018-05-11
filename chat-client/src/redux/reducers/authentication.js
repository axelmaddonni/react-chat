import {LOGOUT, LOGIN_REQUEST, LOGIN_ERROR, LOGIN_OK} from "../../constants/ActionTypes";

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case LOGIN_OK:
            console.log("LOGIN_OK");
            sessionStorage.setItem('user', JSON.stringify(action.user));
            return {
                loggedIn: true,
                user: action.user
            };
        case LOGIN_ERROR:
            console.log("LOGIN_ERROR");
            return {};
        case LOGOUT:
            sessionStorage.clear();
            return {};
        default:
            return state
    }
}