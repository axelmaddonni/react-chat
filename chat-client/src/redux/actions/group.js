import { groupConstants } from "../../constants/ActionTypes";

export const createGroup = (groupId, groupName, members) => ({
    type: groupConstants.CREATE_GROUP,
    groupId,
    groupName,
    members
});

export const deleteMemberGroup = (groupId, nick) => ({
    type: groupConstants.DELETE_MEMBER_GROUP,
    groupId,
    nick
});

export const exitGroup = (groupId) => ({
    type: groupConstants.EXIT_GROUP,
    groupId
});