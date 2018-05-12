import React from 'react'
import { Link } from 'react-router-dom'

class HomeHeader extends React.Component {
    render() {
        return <div id="bottom-bar">
            <Link to='agenda'>
                <button id="agenda"><i className="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Agenda</span></button>
            </Link>
            <Link to='chats'>
                <button id="chats"><i className="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Chats</span></button>
            </Link>
            <Link to='newGroup'>
                <button id="addGroup"><i className="fa fa-cog fa-fw" aria-hidden="true"></i> <span>New Group</span></button>
            </Link>
        </div>
    }
}

export default HomeHeader