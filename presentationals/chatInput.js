import React from 'react'
import PropTypes from 'prop-types'

class ChatInput extends React.Component {

    render() {
        return <section id="chat-input">
            <input
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {

                        // TODO modificar parametros del dispatch
                        props.dispatch(input.value, 'Me')
                        input.value = ''
                    }
                }}
                type="text"
                ref={(node) => {
                    input = node
                }}
            />
        </section>
    }
}

ChatInput.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default ChatInput