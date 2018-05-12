import React from 'react'
import { connect } from 'react-redux'
import {ChatMessage} from '../presentational/chatMessage'
import {chatTypes} from "../constants/ActionTypes";

class ChatMessages extends React.Component {

    render() {

        console.log("PROPS");
        console.log(this.props);
        let messages = getMessages(this.props.activeChatInfo, this.props.privateChats, this.props.groupChats, this.props.publicChats);
        console.log("messages:");
        console.log(messages);

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
                console.log("Public chat:");
                console.log(publicChats);
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
