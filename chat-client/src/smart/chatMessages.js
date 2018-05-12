import React from 'react'
import { connect } from 'react-redux'
import {ChatMessage} from '../presentational/chatMessage'
import {chatTypes} from "../constants/ActionTypes";

class ChatMessages extends React.Component {

    render() {

        let messages = getMessages(this.props.activeChatInfo, this.props.privateChats, this.props.groupChats, this.props.publicChats);

        return <div class="messages">
            <ul>
                {messages.map(message => (
                    <ChatMessage
                        data={message.data}
                        author={message.author}
                    />
                ))}
            </ul>
        </div>
    }
}

function getMessages(activeChatInfo, privateChats, groupChats, publicChats) {

    let chatType = activeChatInfo.chatType;
    let id = activeChatInfo.id;

    if ( chatType=== chatTypes.PRIVATE) {
        return privateChats.get(id);
    } else {
        if (chatType === chatTypes.GROUP) {
            return groupChats.get(id);
        } else {
            if (chatType === chatTypes.PUBLIC) {
                return publicChats;
            } else {
                return [{data: "Mensaje Default", author:"Manu"}];
            }
        }
    }
}

function mapStateToProps(state) {
    const { activeChatInfo, privateChats, groupChats, publicChats } = state;
    return {
        activeChatInfo,
        privateChats,
        groupChats,
        publicChats
    };
}

const connectedChatMessages = connect(mapStateToProps)(ChatMessages);
export { connectedChatMessages as ChatMessages };
