import { userConstants } from "../../constants/ActionTypes";

export const addUser = (nick, age, city) => ({
    type: userConstants.ADD_USER,
    nick,
    age,
    city
});

export const deleteUser = (nick) => ({
    type: userConstants.DELETE_USER,
    nick
});


export const populateUserList = (list) => ({
    type: userConstants.POPULATE_USER_LIST,
    list
});