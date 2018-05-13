import React from 'react'
import NewMember from './newMember'
import { connect } from 'react-redux';
import '../index.css';
import { createGroup } from "../redux/actions/group";
import {history} from "../helpers";

class NewGroup extends React.Component {

    constructor(props) {
        super(props);
        let map = new Map();
        this.props.userList.keySeq().forEach(k => map.set(k, false));
        this.state = {members: map, groupName: ""};
        console.log("stattttteeeeeeee: ");
        console.log(this.state);
        this.handleClick = this.toggleSelected.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    toggleSelected(member) {
        console.log("State: ");
        console.log(this.state);
        console.log(this.props);
        let value = !(this.state.members.get(member));
        this.setState({members: this.state.members.set(member, value)})
    }

    handleChange(event) {
        this.setState({members: this.state.members, groupName: event.target.value});
    }

    render() {
        let input;
        let myNick = JSON.parse(sessionStorage.getItem('user')).nick;
        let keys = [];
        this.props.userList.forEach((value, key) => {
            if (key !== myNick) {
                keys.push(key)
            }
        });
        return ( <div>
                <div id="search">
                    <label htmlFor=""><i className="fa fa-search" aria-hidden="true"></i></label>
                    <input type="text" placeholder="Insert group name..." onChange={this.handleChange} value={this.state.groupName}
                           ref={(node) => {
                               input = node
                           }}/>
                </div>
                <div id="contacts">
                    <ul id="lista">
                        {keys.map((key) => (<NewMember
                            key={key}
                            nick={key}
                            age={this.props.userList.get(key).age}
                            city={this.props.userList.get(key).city}
                            toggleSelected={this.handleClick}
                            selected={this.state.members.get(key)}
                        />))}
                    </ul>
                </div>
                <div className="bottom-bar">
                    <button id="addNewGroup" onClick={dispatchAddNewGroup(this.props, this.state.groupName, this.state.members, myNick)}>
                        <i className="fa fa-user-plus" aria-hidden="true"/>
                        <span> New Group </span>
                    </button>
                </div>
            </div>
        );
    }
}

function dispatchAddNewGroup(props, groupName, members, myNick) {
    let selectedMembers = [];
    members.forEach((value, key) => {
        if (value) {
            selectedMembers.push(key)
        }
    });
    selectedMembers.push(myNick);
    props.dispatchCreateGroup(groupName, selectedMembers);
    history.push('/chats');
}

function mapStateToProps(state) {
    const { userList } = state;
    return {
        userList
    };
}

const mapDispatchToProps = dispatch => ({
    dispatchCreateGroup: (groupName, members) => {
        dispatch(createGroup(groupName, members))
    }
})

const connectedNewGroup = connect(mapStateToProps, mapDispatchToProps)(NewGroup);
export { connectedNewGroup as NewGroup };