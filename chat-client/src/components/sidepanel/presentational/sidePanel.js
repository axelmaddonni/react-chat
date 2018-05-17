import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SidePanelHeader from '../presentational/sidePanelHeader'
import { ActiveChatsAndGroups } from "../smart/activeChatsAndGroups";
import { Agenda } from "../smart/agenda";
import { NewGroup } from "../smart/newGroup";

import Profile from "../presentational/profile";

class SidePanel extends React.Component {

    render() {
        return (
            <div id="sidepanel">
                <SidePanelHeader/>
                <Profile/>
                <Switch>
                    <Route path='/chats' component={ActiveChatsAndGroups}/>
                    <Route path='/agenda' component={Agenda}/>
                    <Route path='/newGroup' component={NewGroup}/>
                    <Route component={Agenda}/>
                </Switch>
            </div>
        )
    }
}

export default SidePanel