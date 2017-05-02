import fetch from 'isomorphic-fetch'
import axios from 'axios';
import { ActionTypes } from '../../actionTypes';

const ROOT_URL = process.env.API_URL;

export function getAddressList (data) {
    
    return (dispatch) => {
        dispatch(fetchAddressList(data));
        return requestAddressList(data).then((json) => {

            if (json.status.code === 1) {
                dispatch(fetchAddressListSuccess(json.locations));
            } else {
                dispatch(fetchAddressListError(json.description));
            }
            
        }).catch((err) => {
            dispatch(fetchAddressListError(err.message));
        });
    }
}

let fetchAddressListSuccess = (payload) => {
    return {
        type: ActionTypes.FETCH_ADDRESS_LIST_SUCCESS,
        payload
    }
}

let fetchAddressListError = (payload) => {
    return {
        type: ActionTypes.FETCH_ADDRESS_LIST_ERROR,
        payload
    }
}

let fetchAddressList = (data) => {
    return {
        type: ActionTypes.FETCH_ADDRESS_LIST,
        data
    }
}

let requestAddressList = (data) => {
    const request = axios.post(`${ROOT_URL}/service/location/search`, data);
    return request
    .then((response) => { 
        return response.data;
    });
}
