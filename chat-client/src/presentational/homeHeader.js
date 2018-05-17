import React from 'react'
import GoToLink from "./GoToLink";

class HomeHeader extends React.Component {
    render() {
        return <div id="bottom-bar">
            <GoToLink link="agenda"/>
            <GoToLink link="chats"/>
            <GoToLink link="newGroup"/>
        </div>
    }
}

export default HomeHeader