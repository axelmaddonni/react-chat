import { combineReducers } from 'redux'
import privateChats from './privateChats'
import groupChats from './groupChats'
import userList from './userList'
import publicChats from './publicChats'
import activeChatList from './activeChatsList'
import activeChatInfo from './activeChatInfo'
import groupList from './groupList'
import authentication from './authentication'
import alert from './alert'

const reducers = combineReducers({
    userList,
    groupList,
    activeChatList,
    activeChatInfo,
    privateChats,
    publicChats,
    groupChats,
    authentication,
    alert
})

export default reducers
