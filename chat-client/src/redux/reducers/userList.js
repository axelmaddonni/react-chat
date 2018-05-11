const { Map } = require('immutable');
const initialState = new Map();
const userList = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_USER':
            return state.set(action.nick, {age: action.age, city: action.city});
        case 'DELETE_USER':
            return state.delete(action.nick);
        case 'POPULATE_USER_LIST':
            return action.list;
        case 'LOGOUT':
            return initialState;
        default:
            return state
    }
};

export default userList
