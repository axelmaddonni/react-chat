import { combineReducers } from 'redux'
import chats from './chats'
import userList from './userList'
import activeChat from './activeChat'
import activeView from './activeView'

const reducers = combineReducers({
    chats,
    userList,
    activeChat,
    activeView
})

export default reducers
