import React, { Component } from 'react';
import ActiveChat from "../presentational/activeChat";
import SidePanel from "./sidePanel";

class HomePage extends Component {
    render() {
        console.log("RENDERING HOME PAGE");
        console.log(this.props);
        return (
                <div id="frame">
                    <SidePanel />
                    <ActiveChat />
                </div>
        );
    }
}

export default HomePage