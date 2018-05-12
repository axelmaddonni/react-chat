import React from 'react'
import { connect } from 'react-redux'
import { ActiveChatsAndGroupsButton } from './activeChatsAndGroupsButton'
import HomeHeader from "../presentational/homeHeader";

class ActiveChatsAndGroups extends React.Component {

    render() {
        console.log("PROPS:");
        console.log(this.props);

        return (
            <div id="chat-messages">
                {this.props.activeChatList.map(chatInfo => (
                    <ActiveChatsAndGroupsButton chatInfo={chatInfo}/>
                ))}
            </div>
        );
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
