import React, { Component } from 'react';
import logo from '../logo.svg';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import {Agenda} from "../smart/agenda"
import {ActiveChatsAndGroups} from "../smart/activeChatsAndGroups"
import ActiveChat from "../presentational/activeChat";

class HomePage extends Component {
    render() {
        return (
                <div id="frame">

                    <Agenda />
                    {/*<div id="sidepanel">*/}
                        {/*<ActiveChatsAndGroups />*/}
                    {/*</div>*/}
                    <ActiveChat />

                </div>
        );
    }
}



function mapStateToProps(state) {
    return {};
}

const connected = connect(mapStateToProps)(HomePage);
export { connected as HomePage }