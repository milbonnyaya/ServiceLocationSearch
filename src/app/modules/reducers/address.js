import { ActionTypes } from '../../actionTypes';

let status = {
    error: false,
    message: '',
    success: false
};

const INITIAL_STATE = { 
    list: [],
    addressListStatus: status
};

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {
        case ActionTypes.FETCH_ADDRESS_LIST_SUCCESS:
            return Object.assign({}, state, {
                list: action.payload,
                addressListStatus: {
                    error: false,
                    message: '',
                    success: true
                }
            });
        case ActionTypes.FETCH_ADDRESS_LIST_ERROR:
            return Object.assign({}, state, {
                addressListStatus: {
                    error: true,
                    message: action.payload,
                    success: false
                }
            });
        default:
            return state || INITIAL_STATE;
    }
};
