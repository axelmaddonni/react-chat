import React from 'react'
import { connect } from 'react-redux'
import {ChatMessage} from '../presentational/chatMessage'
import {chatTypes} from "../constants/ActionTypes";

class ChatMessages extends React.Component {

    render() {

        let messages = getMessages(this.props.activeChatInfo, this.props.privateChats, this.props.groupChats, this.props.publicChats);
        console.log(messages);

        return <div className="messages">
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

    componentDidUpdate() {
        let lastMsg = document.querySelector(".messages li:last-child");
        if (lastMsg != null) {
            lastMsg.scrollIntoView();
        }
    }
}

function getMessages(activeChatInfo, privateChats, groupChats, publicChats) {
    const chatType = activeChatInfo.chatType;
    const id = activeChatInfo.id;

    if (chatType === chatTypes.PUBLIC) {
        return publicChats;
    } else if (chatType === chatTypes.PRIVATE) {
        return privateChats.get(id);
    } else if (chatType === chatTypes.GROUP) {
        return groupChats.get(id);
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
