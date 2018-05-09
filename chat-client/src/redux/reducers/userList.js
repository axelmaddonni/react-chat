const { Map } = require('immutable');
const userList = (state = new Map(), action) => {
    switch (action.type) {
        case 'ADD_USER':
            return state.set([action.nick], {age: action.age, city: action.city});
        case 'DELETE_USER':
            return state.delete(action.nick);
        case 'LOGIN_OK':
            return action.list;
        default:
            return state
    }
};

export default userList
