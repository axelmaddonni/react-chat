import React from 'react'
import { connect } from 'react-redux'
import {chatTypes, publicChatName} from "../constants/ActionTypes";
import '../index.css';

class ChatHeader extends React.Component {
    render() {
        return <div className="contact-profile">
            <img src={"https://api.adorable.io/avatars/285/" + getChatName(this.props.activeChatInfo, this.props.userList, this.props.groupList) + ".png"} alt=""/>
            <p>{getChatName(this.props.activeChatInfo, this.props.userList, this.props.groupList)}</p>
        </div>
    }
}

function getChatName(activeChatInfo, userList, groupList) {
    let type = activeChatInfo.chatType;
    let id = activeChatInfo.id;

    if ( type === chatTypes.PRIVATE) {
        return id;
    } else {
        if (type === chatTypes.GROUP) {
            return groupList.get(id).groupName;
        } else {
            if (type === chatTypes.PUBLIC) {
                return publicChatName;
            }
        }
    }
}

function mapStateToProps(state) {
    const { activeChatInfo, userList, groupList } = state;
    return {
        activeChatInfo,
        userList,
        groupList
    };
}

const connectedChatHeader = connect(mapStateToProps)(ChatHeader);
export { connectedChatHeader as ChatHeader };