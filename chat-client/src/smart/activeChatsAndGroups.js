import { connect } from 'react-redux'
import activeChatsAndGroupsPresentational from '../presentational/chatInput'
import { updateActiveChat } from '../redux/actions'

const mapDispatchToProps = dispatch => ({
    updateActiveChat: (nick) => {
        dispatch(updateActiveChat(nick))
    }
})

export const updateActiveChat = connect(() => ({}), mapDispatchToProps)(activeChatsAndGroupsPresentational)