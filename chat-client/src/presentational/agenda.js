import React from 'react'
import PropTypes from 'prop-types'
import UserInfo from './userInfo'

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

UserInfo.propTypes = {
    userList: PropTypes.arrayOf({
            nick: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
            city: PropTypes.string.isRequired
        }.isRequired)
}

export default Agenda