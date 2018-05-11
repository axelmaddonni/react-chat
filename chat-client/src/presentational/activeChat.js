import React from 'react'
import ChatMessages from './chatMessages'
import ChatInput from './chatInput'
import ChatHeader from '../smart/chatHeader'

class ActiveChat extends React.Component {

    render() {
        return <section id="active-chat">
            <ChatHeader/>
            <ChatMessages/>
            <ChatInput/>
        </section>
    }
}

export default ActiveChat