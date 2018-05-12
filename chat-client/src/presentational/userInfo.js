import React from 'react'
import PropTypes from 'prop-types'
import '../index.css';

class UserInfo extends React.Component {
    render() {
        return <li className="contact">
                <div className="wrap">
                    <img src="https://api.adorable.io/avatars/285/louislitt.png" alt=""/>
                    <div className="meta">
                        <p className="name">{this.props.nick}</p>
                        <p className="preview">Age: {this.props.age} City: {this.props.city}</p>
                    </div>
                </div>
            </li>
    }
}

UserInfo.propTypes = {
    nick: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
}

export default UserInfo