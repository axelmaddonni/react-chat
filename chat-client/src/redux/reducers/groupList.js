const { Map } = require('immutable');
const groupList = (state = new Map(), action) => {
    switch (action.type) {
        case 'CREATE_GROUP':
            return state.set(action.groupId, [action.name, action.members]);
        case 'EXIT_GROUP':
            return state.delete(action.groupId);
        case 'LOG_OUT':
            return state.clear();
        default:
            return state
    }
};

export default groupList