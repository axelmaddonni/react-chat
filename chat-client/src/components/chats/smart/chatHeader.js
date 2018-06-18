import React from 'react'
import { connect } from 'react-redux'
import { chatTypes, publicChatName } from "../../../constants/index";

class ChatHeader extends React.Component {
    render() {
        return <div className="contact-profile">
            <img src={"https://api.adorable.io/avatars/285/" + getChatName(this.props.activeChatInfo, this.props.userList, this.props.groupList) + ".png"} alt=""/>
            <p id="chat-header">{getChatName(this.props.activeChatInfo, this.props.userList, this.props.groupList, true)}</p>
        </div>
    }
}

function getChatName(activeChatInfo, userList, groupList, withMembers = false) {
    let type = activeChatInfo.chatType;
    let id = activeChatInfo.id;

    if ( type === chatTypes.PRIVATE) {
        return id;
    } else {
        if (type === chatTypes.GROUP) {
            return groupList.get(id).groupName.concat(withMembers ? "(" + groupList.get(id).members.join(',') + ")" : "");
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