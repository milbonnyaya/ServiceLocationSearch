import { combineReducers } from 'redux';
import AddressReducer from './address';

const rootReducer = combineReducers({
    addresses: AddressReducer
});

export default rootReducer;
