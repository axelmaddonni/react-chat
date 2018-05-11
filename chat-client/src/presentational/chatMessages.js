import React from 'react'
import PropTypes from 'prop-types'
import ChatMessage from './chatMessage'

class ChatMessages extends React.Component {

    render() {
        return <section id="chat-messages">
            <ul>
                {this.props.chats.map(message => (
                    <ChatMessage
                        data={message.data}
                        author={message.author}
                    />
                ))}
            </ul>
        </section>
    }
}


ChatMessages.propTypes = {
    chat: PropTypes.arrayOf({
            data: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }.isRequired)
}

export default ChatMessages
