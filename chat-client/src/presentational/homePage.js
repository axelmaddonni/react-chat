import React, { Component } from 'react';
import ActiveChat from "../presentational/activeChat";
import SidePanel from "./sidePanel";

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