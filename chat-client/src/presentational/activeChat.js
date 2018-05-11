import React from 'react'
import PropTypes from 'prop-types'
import ChatMessages from './chatMessages'
import ChatInput from './chatInput'
import ChatHeader from './chatHeader'

class ActiveChat extends React.Component {

    render() {
        return <section id="active-chat">
            <ChatHeader nick={this.props.receiver} />
            <ChatMessages chat={this.props.chat} />
            <ChatInput activeChatInfo={this.props.activeChatInfo} author={this.props.author} />
        </section>
    }
}

export default ActiveChat
