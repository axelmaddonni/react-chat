import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {updateActiveChat} from "../redux/actions/activeChat";
import {chatTypes, publicChatName} from "../constants/ActionTypes";

class ActiveChatsAndGroupsButton extends React.Component {

    render() {

        return <li className="contact">
            <div className="wrap">
                <img src="https://api.adorable.io/avatars/285/louislitt.png" alt=""/>
                <div className="meta">
                    <div onClick={this.props.dispatchUpdateActiveChat(this.props.chatType, this.props.id)}> {getChatName()}</div>
                </div>
            </div>
        </li>
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

ActiveChatsAndGroupsButton.propTypes = {
    id: PropTypes.string.isRequired
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
        dispatch(updateActiveChat(chatType, id))
    }
})

const connected = connect(mapStateToProps, mapDispatchToProps)(ActiveChatsAndGroupsButton);
export { connected as ActiveChatsAndGroupsButton };