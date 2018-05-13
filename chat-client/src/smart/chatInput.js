import { connect } from 'react-redux'
import { sendPublicMessageWithType, sendPrivateMessage, sendGroupMessage } from '../redux/actions/message'
import React from 'react'
import {chatTypes, messageType} from "../constants/ActionTypes";

class ChatInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', messageType: messageType.TEXT};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit() {
        if (this.state.value.length > 0) {
            dispatchSendMessage(this.props, this.state.value, this.state.messageType);
        }
        this.setState({value: ''});
    }

    render() {
        let input;
        return <div className="message-input">
            <div className="wrap">
                <input
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            this.handleSubmit();
                        }
                    }}
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.value}
                    ref={(node) => {
                        input = node
                    }}

                />
                <i className="fa fa-paperclip attachment" aria-hidden="true" onClick={()=>alert(1)}/>
                <button className="submit" onClick={this.handleSubmit}>
                    <i className="fa fa-paper-plane" aria-hidden="true"/>
                </button>
            </div>
        </div>
    }
}

function dispatchSendMessage(props, data) {
    let chatType = props.activeChatInfo.chatType;
    let id = props.activeChatInfo.id;
    let nick = props.authentication.user.nick;

    if ( chatType=== chatTypes.PRIVATE) {
        props.dispatchSendPrivateMessage(id, nick , data);
    } else {
        if (chatType === chatTypes.GROUP) {
            props.dispatchSendGroupMessage(id, nick, data);
        } else {
            if (chatType === chatTypes.PUBLIC) {
                props.dispatchSendPublicMessage(nick, data, "messageType");
            }
        }
    }
}

function mapStateToProps(state) {
    const { activeChatInfo, authentication } = state;
    return {
        activeChatInfo,
        authentication
    };
}

const mapDispatchToProps = dispatch => ({
    dispatchSendPublicMessage: (author, data) => {
        dispatch(sendPublicMessageWithType(author, data, "messageType"))
    },
    dispatchSendPrivateMessage: (receiver, author, data) => {
        dispatch(sendPrivateMessage(receiver, author, data))
    },
    dispatchSendGroupMessage: (groupId, author, data) => {
        dispatch(sendGroupMessage(groupId, author, data))
    }
})

const connectedChatInput = connect(mapStateToProps, mapDispatchToProps)(ChatInput);
export { connectedChatInput as ChatInput };
