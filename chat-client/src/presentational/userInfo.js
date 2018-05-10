import React from 'react'
import PropTypes from 'prop-types'

class ChatMessage extends React.Component {
    render() {
        return <div>
            <i>{this.props.nick}</i> - <i>{this.props.age}</i> - <i>{this.props.city}</i>
        </div>
    }
}

ChatMessage.propTypes = {
    nick: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
}

export default ChatMessage