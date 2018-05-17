import React, { Component } from 'react';
import ActiveChat from "../../chats/presentational/activeChat";
import SidePanel from "../../sidepanel/presentational/sidePanel";

class HomePage extends Component {
    render() {
        return (
                <div id="frame">
                    <SidePanel />
                    <ActiveChat />
                </div>
        );
    }
}

export default HomePage