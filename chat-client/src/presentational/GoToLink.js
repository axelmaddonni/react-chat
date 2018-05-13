import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class GoToLink extends React.Component {
    render() {
        console.log(this.context);
        console.log(this.context.router);
        let selected = this.context.router.route.location.pathname;
        return (
            <Link to={this.props.link}>
                <button id={this.props.link} className={ selected === ("/" + this.props.link) ? "selected" : "" }>
                    <i className="fa fa-user-plus fa-fw" aria-hidden="true"/>
                    <span> { this.props.link.toUpperCase() } </span>
                </button>
            </Link>
        )
    }
}

GoToLink.contextTypes = {
    router: PropTypes.object
};

export default GoToLink