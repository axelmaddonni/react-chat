import { combineReducers } from 'redux'
import chats from './chats'
import groupChats from './groupChats'
import userList from './userList'
import activeChat from './activeChat'
import activeView from './activeView'

const reducers = combineReducers({
    chats,
    groupChats,
    userList,
    activeChat,
    activeView
})

export default reducers
