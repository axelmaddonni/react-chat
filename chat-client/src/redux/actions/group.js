import { groupConstants } from "../../constants/index";

export const createGroup = (groupName, members) => ({
    type: groupConstants.CREATE_GROUP,
    groupName,
    members
});

export const addGroup = (groupId, groupName, members) => ({
    type: groupConstants.ADD_GROUP,
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