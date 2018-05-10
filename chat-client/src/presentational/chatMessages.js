import React from 'react'
import PropTypes from 'prop-types'
import ChatMessage from './chatMessage'
const { Map } = require('immutable');

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


//No se si está bien poner el tipo de Map (adentro de Map) - Manu
//Map o un arreglo?? - Manu

/*chat: PropTypes.arrayOf({
        data: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        receiver: PropTypes.string.isRequired
    }).isRequired)*/

ChatMessages.propTypes = {
        chats: PropTypes.instanceOf(Map(
            PropTypes.string.isRequired,
            PropTypes.shape({
                data: PropTypes.string.isRequired,
                author: PropTypes.string.isRequired,
                receiver: PropTypes.string.isRequired
            })).isRequired)
}

export default ChatMessages
