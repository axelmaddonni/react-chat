import { takeEvery } from 'redux-saga/effects'
import * as types from '../../constants/ActionTypes'

const handleNewMessage = function* handleNewMessage(socket) {

    // TODO: login. yield takeEvery(types.LOGIN_REQUEST, ...)
    yield takeEvery(types.SEND_MESSAGE, emitAction);
    yield takeEvery(types.CREATE_GROUP, emitAction);
    yield takeEvery(types.ADD_GROUP_MESSAGE, emitAction); // TODO: duda, agarrara tambien cuando viene del sv?
    yield takeEvery(types.EXIT_GROUP, emitAction);
    yield takeEvery(types.CREATE_GROUP, emitAction);
    yield takeEvery(types.LOG_OUT, emitAction);

    function* emitAction(action) {
        var params = Object.assign({}, action);
        delete params.type;
        socket.emit(action.type, params);
    }
}

export default handleNewMessage
