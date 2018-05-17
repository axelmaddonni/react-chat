import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { chatTypes } from "../../../constants/index";
import { addActiveChat, updateActiveChat } from "../../../redux/actions/activeChat";
import { history } from "../../../helpers";

class UserInfo extends React.Component {
    render() {
        return (
            <li className="contact" onClick={() => this.props.dispatchUpdateActiveChat(this.props.nick)}>
                <div className="wrap">
                    <img src={"https://api.adorable.io/avatars/285/" + this.props.nick + ".png"} alt=""/>
                    <div className="meta">
                        <p className="name">{this.props.nick}</p>
                        <p className="preview">Age: {this.props.age} City: {this.props.city}</p>
                    </div>
                </div>
            </li>
        )
    }
}

UserInfo.propTypes = {
    nick: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => ({
    dispatchUpdateActiveChat: (nick) => {
        dispatch(addActiveChat(chatTypes.PRIVATE, nick));
        dispatch(updateActiveChat(chatTypes.PRIVATE, nick));
        history.push('/chats');
    }
});

const mapStateToProps = () => {
    return {};
};

const connected = connect(mapStateToProps, mapDispatchToProps)(UserInfo);
export { connected as UserInfo };