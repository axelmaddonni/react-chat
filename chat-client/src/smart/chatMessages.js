import React from 'react'
import { connect } from 'react-redux'
import {ChatMessage} from '../presentational/chatMessage'
import {chatTypes} from "../constants/ActionTypes";

class ChatMessages extends React.Component {

    render() {

        let messages = getMessages(this.props.activeChatInfo, this.props.chats, this.props.groupChats, this.props.publicChat);

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

function getMessages(activeChatInfo, chats, groupChats, publicChat) {

    let chatType = activeChatInfo.chatType;
    let id = activeChatInfo.id;

    if ( chatType=== chatTypes.PRIVATE) {
        return chats.get(id);
    } else {
        if (chatType === chatTypes.GROUP) {
            return groupChats.get(id);
        } else {
            if (chatType === chatTypes.PUBLIC) {
                //TODO
                //return publicChat;
                return [{data: "Mensaje Default", author:"Manu"}];
            } else {
                return [{data: "Mensaje Default", author:"Manu"}];
            }
        }
    }
}

function mapStateToProps(state) {
    const { activeChatInfo, chats, groupChats, publicChat } = state;
    return {
        activeChatInfo,
        chats,
        groupChats,
        publicChat
    };
}

const connectedChatMessages = connect(mapStateToProps)(ChatMessages);
export { connectedChatMessages as ChatMessages };
