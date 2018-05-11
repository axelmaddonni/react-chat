import React from 'react'
import UserInfo from '../presentational/userInfo'
import { connect } from 'react-redux';

class Agenda extends React.Component {

    render() {
        return <section id="chat-messages">
            <ul>
                {this.props.userList.map(userInfo => (
                    <UserInfo
                        nick={userInfo.nick}
                        age={userInfo.age}
                        city={userInfo.city}
                    />
                ))}
            </ul>
        </section>
    }
}

function mapStateToProps(state) {
    const { userList } = state;
    return {
        userList
    };
}

const connected = connect(mapStateToProps)(Agenda);
export { connected as Agenda };