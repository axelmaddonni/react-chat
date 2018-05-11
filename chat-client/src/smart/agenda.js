import React from 'react'
import UserInfo from '../presentational/userInfo'
import { connect } from 'react-redux';

class Agenda extends React.Component {

    render() {
        let keys = new Array();
        this.props.userList.forEach((value, key) => keys.push(key));

        return <div id="agenda">
                {keys.map((key) => (<UserInfo
                    nick={key}
                    age={this.props.userList.get(key).age}
                    city={this.props.userList.get(key).city}
                />))}
        </div>
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