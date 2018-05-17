import React from 'react'
import GoToLink from "./goToLink";

class SidePanelHeader extends React.Component {
    render() {
        return <div id="bottom-bar">
            <GoToLink link="agenda"/>
            <GoToLink link="chats"/>
            <GoToLink link="newGroup"/>
        </div>
    }
}

export default SidePanelHeader