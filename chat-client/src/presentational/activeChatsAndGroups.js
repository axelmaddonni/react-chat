import React from 'react'
import PropTypes from 'prop-types'

class ActiveChatsAndGroups extends React.Component {

    render() {
        return  <section id="chat-messages">
            <ul onClick={this.props.updateActiveChat(this.tupla.key)}>
                {this.props.chats.map(tupla => (
                    tupla.key
                ))}
            </ul>
        </section>
    }
}

//chats es un map o un arreglo? - Manu

ActiveChatsAndGroups.propTypes = {
    updateActiveChat: PropTypes.func.isRequired,
    chats: PropTypes.instanceOf(Map(
        nickReceiver: PropTypes.string.isRequired,
        PropTypes.shape({
            data: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            receiver: PropTypes.string.isRequired
        })).isRequired)
}

export default ActiveChatsAndGroups
