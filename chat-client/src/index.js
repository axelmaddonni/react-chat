import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import './index.css'
import { App } from './components/home/smart/App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './redux/reducers'
import handleNewMessage from './redux/sagas'
import setupSocket from './redux/sockets'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

store.subscribe(() => {
    console.log("STATE CHANGED");
    console.log(store.getState());
});

const socket = setupSocket(store.dispatch);

sagaMiddleware.run(handleNewMessage, socket);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
