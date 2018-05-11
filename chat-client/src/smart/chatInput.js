import { connect } from 'react-redux'
import { sendPublicMessage, sendPrivateMessage, sendGroupMessage } from '../redux/actions/message'
import React from 'react'
import {chatTypes} from "../constants/ActionTypes";

class ChatInput extends React.Component {

    render() {
        let input;

        return <section id="chat-input">
            <input
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        dispatchSendMessage(input.value);
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

function dispatchSendMessage(data) {
    let chatType = this.props.activeChatInfo.chatType;
    let id = this.props.activeChatInfo.id;
    let nick = this.props.authentication.user.nick;

    if ( chatType=== chatTypes.PRIVATE) {
        this.props.dispatchSendPrivateMessage(id, nick , data);
    } else {
        if (chatType === chatTypes.GROUP) {
            this.props.dispatchSendGroupMessage(id, nick, data);
        } else {
            if (chatType === chatTypes.PUBLIC) {
                this.props.dispatchSendPublicMessage(nick, data);
            }
        }
    }
}

function mapStateToProps(state) {
    const { activeChatInfo, authentication } = state;
    return {
        activeChatInfo,
        authentication
    };
}

const mapDispatchToProps = dispatch => ({
    dispatchSendPublicMessage: (message) => {
        dispatch(sendPublicMessage(message))
    },
    dispatchSendPrivateMessage: (message) => {
        dispatch(sendPrivateMessage(message))
    },
    dispatchSendGroupMessage: (message) => {
        dispatch(sendGroupMessage(message))
    }
})

const connected = connect(mapStateToProps, mapDispatchToProps())(ChatInput);
export { connected as ChatInput };