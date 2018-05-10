const { Map } = require('immutable');
const initialState = new Map();
const chats = (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_MESSAGE':
            if(state.has(action.message.author)){
                return state.set(action.message.author, state.get(action.message.author).push(action.message));
            }else{
                return state.set(action.message.author, [action.message]);
            }
        case 'SEND_MESSAGE':
            if(state.has(action.message.receiver)){
                return state.set(action.message.receiver, state.get(action.message.receiver).push(action.message));
            }else{
                return state.set(action.message.receiver, [action.message]);
            }
        case 'DELETE_CHAT':
            return state.set(action.nick, []);
        case 'LOGOUT':
            return initialState;
        default:
            return state
    }
};

export default chats
