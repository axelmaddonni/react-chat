const activeChat = (state = 0, action) => {
    switch (action.type) {
        case 'UPDATE_ACTIVE_CHAT':
           return action.nick;
        case 'OPEN_GROUP_CHAT':
            return action.groupId;
        default:
            return state
};

export default activeChat