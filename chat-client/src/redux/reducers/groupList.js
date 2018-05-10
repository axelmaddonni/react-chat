const { Map } = require('immutable');
const initialState = new Map();

const groupList = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_GROUP':
            return state.set(action.groupId, [action.groupName, action.members]);
        case 'EXIT_GROUP':
            return state.delete(action.groupId);
        case 'DELETE_MEMBER_GROUP':
            const members = action.members;
            const newMembers = [];
            members.forEach(function(member) {
                if(member !== action.nick){
                    newMembers.push(member);
                }
            });
            return state.set(action.groupId, [state.get(action.groupId)[0], newMembers])
        case 'LOGOUT':
            return initialState;
        default:
            return state
    }
};

export default groupList