import React from 'react'
import PropTypes from 'prop-types'
import ChatMessages from './chatMessages'
import ChatInput from './chatInput'
import ChatHeader from './chatHeader'

class ActiveChat extends React.Component {

    render() {
        return <section id="active-chat">
            <ChatHeader nick={this.props.receiver} />
            <ChatMessages chats={this.props.chats} />
            <ChatInput sendMessage={} author={this.props.author} receiver={this.props.receiver}/>
        </section>
    }
}

//la funcion sendMessage como se la paso? - Manu
//chat: map o arreglo? - Manu

ActiveChat.propTypes = {
    receiver: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    chats: PropTypes.instanceOf(Map(
        PropTypes.string.isRequired,
        PropTypes.shape({
            data: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            receiver: PropTypes.string.isRequired
        })).isRequired)
}

export default ActiveChat
