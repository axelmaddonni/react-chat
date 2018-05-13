import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {updateActiveChat} from "../redux/actions/activeChat";
import {chatTypes, publicChatName} from "../constants/ActionTypes";
import '../index.css';

class ActiveChatsAndGroupsButton extends React.Component {

    render() {

        return <li className="contact">
            <div className="wrap">
                <img src={"https://api.adorable.io/avatars/285/" + getChatName(this.props.info.chatType, this.props.info.id, this.props.userList, this.props.groupList) + ".png"} alt=""/>
                <div className="meta">
                    <p className="chatName">{getChatName(this.props.info.chatType, this.props.info.id, this.props.userList, this.props.groupList)}</p>
                    <p className="preview"> </p>
                </div>
            </div>
        </li>
            //onClick={this.props.dispatchUpdateActiveChat()}
    }
}

function getChatName(type, id, userList, groupList) {

    if ( type === chatTypes.PRIVATE) {
        return userList.get(id);
    } else {
        if (type === chatTypes.GROUP) {
            return groupList.get(id);
        } else {
            if (type === chatTypes.PUBLIC) {
                console.log("TIPO PUBLIC");
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
        dispatch(updateActiveChat(chatType, id))
    }
})

const connected = connect(mapStateToProps, mapDispatchToProps)(ActiveChatsAndGroupsButton);
export { connected as ActiveChatsAndGroupsButton };