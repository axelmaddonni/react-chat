import React from 'react'
import {ChatMessages} from '../smart/chatMessages'
import {ChatInput} from '../smart/chatInput'
import {ChatHeader} from '../smart/chatHeader'

class ActiveChat extends React.Component {

    render() {
        return <div class="content">
            <ChatHeader/>
            <ChatMessages/>
            <ChatInput/>
        </div>
    }
}

export default ActiveChat