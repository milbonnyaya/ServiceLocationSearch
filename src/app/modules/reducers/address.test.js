import reducer from './address';
import { ActionTypes } from '../../actionTypes';

describe('Address Reducer', () => {

    it('It should return initial state', () => {
        
        expect(
            reducer(undefined, {})
        ).toEqual({
            list :[], 
            addressListStatus: {
                error: false,
                message: '',
                success: false
            }
        });

    });
});