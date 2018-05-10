import { combineReducers } from 'redux'
import chats from './chats'
import groupChats from './groupChats'
import userList from './userList'
import activeChat from './activeChat'
import groupList from './groupList'
import authentication from './authentication'
import alert from './alert'

const reducers = combineReducers({
    userList,
    groupList,
    activeChat,
    chats,
    groupChats,
    authentication,
    alert
})

export default reducers
