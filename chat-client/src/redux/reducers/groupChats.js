const { Map } = require('immutable');
const groupChats = (state = new Map(), action) => {
    switch (action.type) {
        case 'CREATE_GROUP':
            return state.set([action.groupId], new Map());
        case 'ADD_GROUP_MESSAGE':
            return state.set([action.groupId], {message: action.message});
        case 'DELETE_GROUP_MESSAGE':
            return state.set([action.groupId], new Map());
        case 'EXIT_GROUP':
            return state.delete(action.groupId);
        default:
            return state
    }
};

export default groupChats
