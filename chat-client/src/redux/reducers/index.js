import { combineReducers } from 'redux'
import chats from './chats'
import groupChats from './groupChats'
import userList from './userList'
import activeChat from './activeChat'
import groupList from './groupList'

const reducers = combineReducers({
    chats,
    groupChats,
    userList,
    activeChat,
    groupList
})

export default reducers
