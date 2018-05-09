const activeChat = (state = [0, '', 0], action) => {
    switch (action.type) {
        case 'UPDATE_ACTIVE_CHAT':
           return [0, action.nick, 1];
        case 'OPEN_GROUP_CHAT':
            return [action.groupId, '', 0];
        default:
            return state
};

export default activeChat