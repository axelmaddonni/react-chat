import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {deleteActiveChat, updateActiveChat} from "../redux/actions/activeChat";
import {chatTypes, publicChatName} from "../constants/ActionTypes";
import '../index.css';

class ActiveChatsAndGroupsButton extends React.Component {

    getCloseIcon = () => (
        <i className="fa fa-times-circle -float-right" onClick={(e) => {
            e.stopPropagation();
            this.props.closeChat(this.props.info);
        }}/>
    )

    render() {
        return <li className="contact"
                   onClick={() => this.props.dispatchUpdateActiveChat(this.props.info.chatType, this.props.info.id)}>
            <div className="wrap">
                <img src={"https://api.adorable.io/avatars/285/" + getChatName(this.props.info, this.props.userList, this.props.groupList) + ".png"} alt=""/>
                <div className="meta">
                    <p className="chatName">{getChatName(this.props.info, this.props.userList, this.props.groupList)}
                        { this.props.info.chatType !== chatTypes.PUBLIC ? this.getCloseIcon() : '' }
                    </p>
                    <p className="preview"> </p>
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

ActiveChatsAndGroupsButton.propTypes = {
    info: PropTypes.shape({chatType: PropTypes.string.isRequired, id: PropTypes.string}).isRequired
}

function mapStateToProps(state) {
    const { userList, groupList} = state;
    return {
        userList,
        groupList
    };
}

const mapDispatchToProps = dispatch => ({
    dispatchUpdateActiveChat: (chatType, id) => {
        console.log('update');
        dispatch(updateActiveChat(chatType, id))
    },
    closeChat: (chatInfo) => {
        console.log("close");
        dispatch(deleteActiveChat(chatInfo.chatType, chatInfo.id));
    }
})

const connected = connect(mapStateToProps, mapDispatchToProps)(ActiveChatsAndGroupsButton);
export { connected as ActiveChatsAndGroupsButton };