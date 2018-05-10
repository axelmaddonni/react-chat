import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './redux/reducers'
import handleNewMessage from './redux/sagas'
import setupSocket from './redux/sockets'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

const user = { nick: "axelito", age: 2, city: "Buenos Aires"}

const socket = setupSocket(store.dispatch, user)

sagaMiddleware.run(handleNewMessage, { socket, username })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
