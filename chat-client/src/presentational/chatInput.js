import React from 'react'
import PropTypes from 'prop-types'

class ChatInput extends React.Component {

    render() {
        let input;
        let message;

        return <section id="chat-input">
            <input
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        message.data = input.value;
                        message.author = this.props.author;
                        message.receiver = this.props.receiver;
                        this.props.sendMessage(message);
                        input.value = '';
                    }
                }}
                type="text"
                ref={(node) => {
                    input = node
                }}
            />
        </section>
    }
}

ChatInput.propTypes = {
    sendMessage: PropTypes.func.isRequired,
    author: PropTypes.string.isRequired,
    receiver: PropTypes.string.isRequired
}

export default ChatInput