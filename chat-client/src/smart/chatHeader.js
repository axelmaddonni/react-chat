import React from 'react'
import { connect } from 'react-redux'
import {chatTypes, publicChatName} from "../constants/ActionTypes";

class ChatHeader extends React.Component {
    render() {
        return <div>
            {getChatName()}
        </div>
    }
}

function getChatName() {

    let type = this.props.chatType;
    let id = this.props.id;

    if ( type === chatTypes.PRIVATE) {
        return this.props.userList.get(id);
    } else {
        if (type === chatTypes.GROUP) {
            return this.props.groupList.get(id);
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

const connected = connect(mapStateToProps)(ChatHeader);
export { connected as ChatHeader };