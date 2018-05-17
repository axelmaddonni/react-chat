import React from 'react'
import { UserInfo } from './userInfo'
import { connect } from 'react-redux';

class Agenda extends React.Component {

    render() {
        let myNick = JSON.parse(sessionStorage.getItem('user')).nick;
        let keys = [];
        this.props.userList.forEach((value, key) => {
            if (key !== myNick) {
                keys.push(key)
            }
        });
        return (
            <div id="contacts">
                <ul id="lista">
                    {keys.map((key) => (<UserInfo
                        key={key}
                        nick={key}
                        age={this.props.userList.get(key).age}
                        city={this.props.userList.get(key).city}
                    />))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { userList } = state;
    return {
        userList
    };
}

const connectedAgenda = connect(mapStateToProps)(Agenda);
export { connectedAgenda as Agenda };