import React from 'react'
import PropTypes from 'prop-types'
import ChatMessage from './chatMessage'

class ChatMessages extends React.Component {

    render() {
        return <section id="chat-messages">
            <ul>
                {this.props.chats.map(message => (
                    //TODO revisar
                    <ChatMessage
                        key={message.id}
                        {...message}
                    />
                ))}
            </ul>
        </section>
    }
}

ChatMessages.propTypes = {
        chats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        receiver: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default ChatMessages
