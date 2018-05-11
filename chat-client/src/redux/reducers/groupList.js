import { groupConstants, loginConstants } from "../../constants/ActionTypes";

const { Map } = require('immutable');
const initialState = new Map();

const groupList = (state = initialState, action) => {
    switch (action.type) {
        case groupConstants.ADD_GROUP:
            return state.set(action.groupId, {groupName: action.groupName, members: action.members});
        case groupConstants.EXIT_GROUP:
            return state.delete(action.groupId);
        case groupConstants.DELETE_MEMBER_GROUP:
            const members = state.get(action.groupId).members;
            const newMembers = [];
            members.forEach(function(member) {
                if(member !== action.nick){
                    newMembers.push(member);
                }
            });
            return state.set(action.groupId, {groupName: state.get(action.groupId).groupName, members:newMembers});
        case loginConstants.LOGOUT:
            return initialState;
        default:
            return state
    }
};

export default groupList