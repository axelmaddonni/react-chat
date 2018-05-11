import { connect } from 'react-redux'
import { sendMessage } from '../redux/actions'

import React from 'react'

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

function mapStateToProps(state) {
    const { activeChatInfo } = state;
    return {
        activeChatInfo
    };
}

const mapDispatchToProps = dispatch => ({
    sendMessage: (message) => {
        dispatch(sendMessage(message))
    }
})

const connected = connect(mapStateToProps, mapDispatchToProps())(ChatInput);
export { connected as ChatInput };