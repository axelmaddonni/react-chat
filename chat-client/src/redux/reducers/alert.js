import {alertConstants, loginConstants} from "../../constants/index";

export default function alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            };
        case alertConstants.ERROR:
            return {
                type: 'alert-danger',
                message: action.message
            };
        case alertConstants.CLEAR:
            return {};
        case loginConstants.LOGOUT:
            return {};
        default:
            return state
    }
}