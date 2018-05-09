const { Map } = require('immutable');
const groupChats = (state = new Map(), action) => {
    switch (action.type) {
        case 'CREATE_GROUP':
            return state.set(action.groupId, []);
        case 'ADD_GROUP_MESSAGE':
            return state.set(action.groupId, state.get(action.groupId).push(action.message));
        case 'DELETE_GROUP_MESSAGES':
            return state.set(action.groupId, []);
        case 'EXIT_GROUP':
            return state.delete(action.groupId);
        case 'LOG_OUT':
            return state.clear();
        default:
            return state
    }
};

export default groupChats