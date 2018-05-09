const { Map } = require('immutable');
const chats = (state = new Map(), action) => {
    switch (action.type) {
        case 'RECEIVE_MESSAGE':
            return state.set([action.message.author], {message: action.message});
        case 'SEND_MESSAGE':
            return state.set([action.message.receiver], {message: action.message});
        case 'DELETE_CHAT':
            return state.set([action.nick], new Map());
        default:
            return state
    }
};

export default chats
