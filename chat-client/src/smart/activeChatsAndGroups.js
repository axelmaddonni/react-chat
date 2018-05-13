import React from 'react'
import { connect } from 'react-redux'
import { ActiveChatsAndGroupsButton } from './activeChatsAndGroupsButton'

class ActiveChatsAndGroups extends React.Component {

    render() {
        return (
            <div id="contacts">
                <ul id="lista">
                    {this.props.activeChatList.map((chatInfo, index) => (
                        <ActiveChatsAndGroupsButton key={index} info={chatInfo}/>
                    ))}
                </ul>
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
