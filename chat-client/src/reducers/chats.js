const chats = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return state.push([
                {
                    message: action.message,
                    author: action.author,
                    id: action.id
                }
            ])
        case 'MESSAGE_RECEIVED':
            return state.concat([
                {
                    message: action.message,
                    author: action.author,
                    id: action.id
                }
            ])
        default:
            return state
    }
}

export default chats
