import { connect } from 'react-redux'
import { sendPublicMessage, sendPrivateMessage, sendGroupMessage } from '../redux/actions/message'
import React from 'react'
import {chatTypes} from "../constants/ActionTypes";

class ChatInput extends React.Component {

    render() {
        let input;

        return <div class="message-input">
            <div class="wrap">
                <input
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            dispatchSendMessage(this.props, input.value);
                            input.value = '';
                        }
                    }}
                    type="text"
                    ref={(node) => {
                        input = node
                    }}
                />
                <i class="fa fa-paperclip attachment" aria-hidden="true"></i>
                <button class="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                //TODO ver que hacer con este boton
            </div>
        </div>
    }
}

function dispatchSendMessage(props, data) {
    let chatType = props.activeChatInfo.chatType;
    let id = props.activeChatInfo.id;
    let nick = props.authentication.user.nick;

    if ( chatType=== chatTypes.PRIVATE) {
        props.dispatchSendPrivateMessage(id, nick , data);
    } else {
        if (chatType === chatTypes.GROUP) {
            props.dispatchSendGroupMessage(id, nick, data);
        } else {
            if (chatType === chatTypes.PUBLIC) {
                props.dispatchSendPublicMessage(nick, data);
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

const connectedChatInput = connect(mapStateToProps, mapDispatchToProps)(ChatInput);
export { connectedChatInput as ChatInput };
