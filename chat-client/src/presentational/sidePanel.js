import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import HomeHeader from '../presentational/homeHeader'
import { ActiveChatsAndGroups } from "../smart/activeChatsAndGroups";
import { Agenda } from "../smart/agenda";

import '../index.css';
import { history } from "../helpers";

class SidePanel extends React.Component {

    render() {
        return (
            <div id="sidepanel">
                <HomeHeader/>
                <Switch>
                    <Route path='/chats' component={ActiveChatsAndGroups}/>
                    <Route path='/agenda' component={Agenda}/>
                    <Route path='/newGroup' component={Agenda}/>
                    <Route component={Agenda}/>
                </Switch>
            </div>
        )
    }
}

export default SidePanel