import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { deleteActiveChat, updateActiveChat } from "../../../redux/actions/activeChat";
import { chatTypes, publicChatName } from "../../../constants/index";

class ActiveChatsAndGroupsButton extends React.Component {

    getCloseIcon = () => (
        <i className="fa fa-times-circle -float-right" onClick={(e) => {
            e.stopPropagation();
            this.props.closeChat(this.props.info);
        }}/>
    );

    render() {
        var aux = getChatName(this.props.info, this.props.userList, this.props.groupList);
        return <li className="contact"
                   onClick={() => this.props.dispatchUpdateActiveChat(this.props.info.chatType, this.props.info.id)}>
            <div className="wrap" data-group-id={aux}>
                <img src={"https://api.adorable.io/avatars/285/" + getChatName(this.props.info, this.props.userList, this.props.groupList) + ".png"} alt=""/>
                <div className="meta">
                    <p className="chatName">{getChatName(this.props.info, this.props.userList, this.props.groupList)}
                        { this.props.info.chatType !== chatTypes.PUBLIC ? this.getCloseIcon() : '' }
                    </p>
                    <p className="preview">{getPreview(this.props.info, this.props.privateChats, this.props.groupChats, this.props.publicChats)}</p>
                </div>
            </div>
        </li>
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

function getPreview(activeChatInfo, privateChats, groupChats, publicChats) {
    const msgs = getMessages(activeChatInfo, privateChats, groupChats, publicChats);
    if (! msgs.isEmpty()) {
        let lastMsg = msgs.get(-1);
        return lastMsg.author + ": " + lastMsg.data;
    } else {
        return "";
    }
}

ActiveChatsAndGroupsButton.propTypes = {
    info: PropTypes.shape({chatType: PropTypes.string.isRequired, id: PropTypes.string}).isRequired
};

function mapStateToProps(state) {
    const { userList, groupList, privateChats, groupChats, publicChats } = state;
    return {
        userList,
        groupList,
        privateChats,
        groupChats,
        publicChats
    };
}

const mapDispatchToProps = dispatch => ({
    dispatchUpdateActiveChat: (chatType, id) => {
        dispatch(updateActiveChat(chatType, id))
    },
    closeChat: (chatInfo) => {
        dispatch(deleteActiveChat(chatInfo.chatType, chatInfo.id));
    }
});

const connected = connect(mapStateToProps, mapDispatchToProps)(ActiveChatsAndGroupsButton);
export { connected as ActiveChatsAndGroupsButton };