import React from 'react'
import PropTypes from 'prop-types'

class ChatHeader extends React.Component {
    render() {
        return <p>
            {this.props.nick}
        </p>
    }
}

ChatHeader.propTypes = {
    nick: PropTypes.string.isRequired
}

export default ChatHeader