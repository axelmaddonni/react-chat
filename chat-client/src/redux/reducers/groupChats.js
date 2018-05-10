const { Map } = require('immutable');
const initialState = new Map();
const groupChats = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_GROUP':
            return state.set(action.groupId, []);
        case 'ADD_GROUP_MESSAGE':
            return state.set(action.groupId, state.get(action.groupId).push(action.message));
        case 'DELETE_GROUP_MESSAGES':
            return state.set(action.groupId, []);
        case 'EXIT_GROUP':
            return state.delete(action.groupId);
        case 'LOGOUT':
            return initialState;
        default:
            return state
    }
};

export default groupChats