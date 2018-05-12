import React from 'react'
import PropTypes from 'prop-types'
import GoTo from "./goTo";

class HomeHeader extends React.Component {
    render() {
        return <div id="bottom-bar">
            <button id="agenda"><i className="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Agenda</span>
            </button>
            <button id="chats"><i className="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Chats</span></button>
            <button id="addGroup"><i className="fa fa-cog fa-fw" aria-hidden="true"></i> <span>New Group</span></button>
        </div>
    }
}

export default HomeHeader