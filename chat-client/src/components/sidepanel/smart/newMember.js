import React from 'react'
import PropTypes from 'prop-types'

class NewMember extends React.Component {

    render() {
        return (
            <li className={("contact ").concat(this.props.selected ? "selected" : "")} onClick={() => this.props.toggleSelected(this.props.nick)}>
                <div className="wrap">
                    <img src={"https://api.adorable.io/avatars/285/" + this.props.nick + ".png"} alt=""/>
                    <div className="meta">
                        <p id= "newMemberName" className="name">{this.props.nick}</p>
                        <p className="preview">Age: {this.props.age} City: {this.props.city}</p>
                    </div>
                </div>
            </li>
        )
    }
}

NewMember.propTypes = {
    nick: PropTypes.string.isRequired,
    toggleSelected: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired
};

export default NewMember