import React from 'react'
import NewMember from './newMember'
import { connect } from 'react-redux';
import { createGroup } from "../../../redux/actions/group";
import { history } from "../../../helpers";

class NewGroup extends React.Component {

    constructor(props) {
        super(props);
        let map = new Map();
        this.props.userList.keySeq().forEach(k => map.set(k, false));
        this.state = {members: map, groupName: ""};
        this.handleClick = this.toggleSelected.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleSelected(member) {
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
                    <label htmlFor=""><i className="fa fa-pencil" aria-hidden="true"></i></label>
                    <input id= "groupName-input" type="text" placeholder="Insert group name..." onChange={this.handleChange} value={this.state.groupName}
                           ref={(node) => {
                               input = node
                           }}/>
                </div>
                <div id="contacts">
                    <ul id="listaContactos">
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
                <div className="accept-button" onClick={() => dispatchAddNewGroup(this.props, this.state.groupName, this.state.members, myNick)}>
                    <a id="addNewGroup">
                        <i className="fa fa-check-circle" aria-hidden="true"/>
                        <span> New Group </span>
                    </a>
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
    if (selectedMembers.length > 0 && groupName !== "") {
        selectedMembers.push(myNick);
        props.dispatchCreateGroup(groupName, selectedMembers);
    }
}

function mapStateToProps(state) {
    const { userList } = state;
    return {
        userList
    };
}

const mapDispatchToProps = dispatch => ({
    dispatchCreateGroup: (groupName, members) => {
        dispatch(createGroup(groupName, members));
        history.push('/chats');
    }
});

const connectedNewGroup = connect(mapStateToProps, mapDispatchToProps)(NewGroup);
export { connectedNewGroup as NewGroup };