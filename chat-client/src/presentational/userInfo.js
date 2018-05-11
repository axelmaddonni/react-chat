import React from 'react'
import PropTypes from 'prop-types'

class UserInfo extends React.Component {
    render() {
        return <div>
            <div>{this.props.nick} - {this.props.age} - {this.props.city}</div>
        </div>
    }
}

UserInfo.propTypes = {
    nick: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
}

export default UserInfo