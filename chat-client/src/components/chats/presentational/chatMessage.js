import React from 'react'
import PropTypes from 'prop-types'

class ChatMessage extends React.Component {
    render() {
        let myNick = JSON.parse(sessionStorage.getItem('user')).nick;
        return (<li className={this.props.author === myNick ? "replies" : "sent"}>
            <img src={"https://api.adorable.io/avatars/285/" + this.props.author + ".png"} alt="" />
                <p> {this.props.author}: {this.props.data}</p>
            </li>)
    }
}

ChatMessage.propTypes = {
    data: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export {ChatMessage};