import React from 'react'
import PropTypes from 'prop-types'

class ChatMessage extends React.Component {
    render() {
        return <p>
            <i>{this.props.author}</i>:
            <p>{this.props.message}</p>
        </p>
    }
}

ChatMessage.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default ChatMessage