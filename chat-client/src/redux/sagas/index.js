import { takeEvery } from 'redux-saga/effects'
import * as constants from '../../constants/ActionTypes'

const handleNewMessage = function* handleNewMessage(socket) {

    yield takeEvery(constants.loginConstants.LOGIN_REQUEST, emitAction);
    yield takeEvery(constants.loginConstants.LOGOUT, emitAction);

    yield takeEvery(constants.messageConstants.SEND_PRIVATE, emitAction);
    yield takeEvery(constants.messageConstants.SEND_GROUP, emitAction);
    yield takeEvery(constants.messageConstants.SEND_PUBLIC, emitAction);

    yield takeEvery(constants.groupConstants.CREATE_GROUP, emitAction);
    yield takeEvery(constants.groupConstants.EXIT_GROUP, emitAction);

    function emitAction(action) {
        let params = Object.assign({}, action);
        delete params.type;
        socket.emit(action.type, params);
    }
}

export default handleNewMessage
