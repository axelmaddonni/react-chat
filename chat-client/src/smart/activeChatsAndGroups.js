import React from 'react'
import { connect } from 'react-redux'
import { activeChatsAndGroupsButton } from '../activeChatsAndGroupsButton'

class ActiveChatsAndGroups extends React.Component {

    render() {
        return  <div id="chat-messages">
            {this.props.activeChatList.map(chatInfo => (
                <activeChatsAndGroupsButton chatInfo={chatInfo}/>
            ))}

        </div>
    }
}

function mapStateToProps(state) {
    const { activeChatList } = state;
    return {
        activeChatList
    };
}

const connected = connect(mapStateToProps)(ActiveChatsAndGroups);
export { connected as ActiveChatsAndGroups };
