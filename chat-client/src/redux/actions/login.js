import { loginConstants } from '../../constants/index';

export const login = (user) => ({
    type: loginConstants.LOGIN_REQUEST,
    user: user
});

export const logout = () => ({
    type: loginConstants.LOGOUT
});

export const loginOk = (user) => ({
    type: loginConstants.LOGIN_OK,
    user
});

export const loginError = (error) => ({
    type: loginConstants.LOGIN_ERROR,
    error
});
