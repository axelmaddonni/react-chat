import React from 'react'
import ChatMessage from '../presentational/chatMessage'
import {chatTypes} from "../constants/ActionTypes";

class ChatMessages extends React.Component {

    render() {

        let messages = getMessages();

        return <section id="chat-messages">
            <ul>
                {messages.map(message => (
                    <ChatMessage
                        data={message.data}
                        author={message.author}
                    />
                ))}
            </ul>
        </section>
    }
}

function getMessages() {

    let chatType = this.props.activeChatInfo.chatType;
    let id = this.props.activeChatInfo.id;

    if ( chatType=== chatTypes.PRIVATE) {
        return this.props.chats.get(id);
    } else {
        if (chatType === chatTypes.GROUP) {
            return this.props.groupChats.get(id);
        } else {
            if (chatType === chatTypes.PUBLIC) {
                return this.props.publicChat;
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

const connected = connect(mapStateToProps)(ChatMessages);
export { connected as ChatMessages };
