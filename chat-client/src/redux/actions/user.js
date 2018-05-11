import * as types from "../../constants/ActionTypes";

export const addUser = (nick, age, city) => ({
    type: types.ADD_USER,
    nick,
    age,
    city
});

export const deleteUser = (nick) => ({
    type: types.DELETE_USER,
    nick
});


export const populateUserList = (list) => ({
    type: types.POPULATE_USER_LIST,
    list
});

export const userActions = { addUser, deleteUser, populateUserList };