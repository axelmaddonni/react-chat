import { connect } from 'react-redux'
import chatInputPresentational from '../presentational/chatInput'
import { sendMessage } from '../redux/actions'

const mapDispatchToProps = dispatch => ({
    sendMessage: (message) => {
        dispatch(sendMessage(message))
    }
})

export const sendMessage = connect(() => ({}), mapDispatchToProps)(chatInputPresentational)