import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import './index.css'
import { App } from './App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './redux/reducers'
import handleNewMessage from './redux/sagas'
import setupSocket from './redux/sockets'
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware([sagaMiddleware, thunk])
)

store.subscribe(() => {
    console.log("STATE CHANGED");
    console.log(store.getState());
});

const socket = setupSocket(store.dispatch)

sagaMiddleware.run(handleNewMessage, socket)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
