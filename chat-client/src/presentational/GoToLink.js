import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class GoToLink extends React.Component {
    render() {
        let selected = this.context.router.route.location.pathname;
        return (
            <Link to={this.props.link}>
                <button id={this.props.link} className={ selected === ("/" + this.props.link) ? "selected" : "" }>
                    <i className={"fa fa-" + getIcon(this.props.link) } aria-hidden="true"/>
                    <span> { this.props.link.toUpperCase() } </span>
                </button>
            </Link>
        )
    }
}

function getIcon(link) {
    switch (link) {
        case "agenda":
            return "users"
        case "chats":
            return "comments"
        case "newGroup":
            return "user-plus"
    }
}

GoToLink.contextTypes = {
    router: PropTypes.object
};

export default GoToLink