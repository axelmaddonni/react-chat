import React from 'react'
import {UserInfo} from './userInfo'
import { connect } from 'react-redux';
import '../index.css';

class Agenda extends React.Component {

    render() {
        console.log(this.props.userList);

        let keys = new Array();
        this.props.userList.forEach((value, key) => keys.push(key));
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