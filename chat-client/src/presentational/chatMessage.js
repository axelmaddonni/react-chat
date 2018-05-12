import React from 'react'
import PropTypes from 'prop-types'

class ChatMessage extends React.Component {
    render() {
        return (<li class="sent">
            <img src="https://api.adorable.io/avatars/285/harveyspecter.png" alt="" />
                <p> {this.props.author}: {this.props.data}</p>
            </li>)
    }
}

ChatMessage.propTypes = {
    data: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export {ChatMessage};