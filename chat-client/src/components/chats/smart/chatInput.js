import React from 'react'
import { connect } from 'react-redux'
import { chatTypes } from "../../../constants/index";
import { sendPublicMessage, sendPrivateMessage, sendGroupMessage } from '../../../redux/actions/message'

class ChatInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit() {
        if (this.state.value.length > 0) {
            dispatchSendMessage(this.props, this.state.value);
        }
        this.setState({value: ''});
    }

    render() {
        let input;
        return <div className="message-input">
            <div className="wrap">
                <input id="message-input"
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
                {/* onClick --> (e) => this.handleAttachment(image)*/}
                {/*<input id="myInput" type="file" ref={(node) => image = node} style={{ display: 'none' }} onChange={this.fileChangeHandle}/>*/}
                <i className="fa fa-paperclip attachment" aria-hidden="true" />
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
                props.dispatchSendPublicMessage(nick, data);
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
        dispatch(sendPublicMessage(author, data))
    },
    dispatchSendPrivateMessage: (receiver, author, data) => {
        dispatch(sendPrivateMessage(receiver, author, data))
    },
    dispatchSendGroupMessage: (groupId, author, data) => {
        dispatch(sendGroupMessage(groupId, author, data))
    }
});

const connectedChatInput = connect(mapStateToProps, mapDispatchToProps)(ChatInput);
export { connectedChatInput as ChatInput };
