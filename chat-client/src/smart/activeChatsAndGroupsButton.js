import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {updateActiveChat} from "../redux/actions/activeChat";
import {chatTypes, publicChatName} from "../constants/ActionTypes";

class ActiveChatsAndGroupsButton extends React.Component {

    render() {
        return <div>
            <div onClick={this.props.dispatchUpdateActiveChat(this.props.chatType, this.props.id)}> {getChatName(this.props.chatType, this.props.id)}</div>
        </div>
    }
}

export function getChatName(type, id) {

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