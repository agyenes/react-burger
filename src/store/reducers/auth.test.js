import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false
        })
    });

    it('should store token after login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false
        }, { 
            type: actionTypes.AUTH_SUCCESS,
            token: 'vmi', 
            userId: 'vmi',
        })).toEqual({
            token: 'vmi',
            userId: 'vmi',
            error: null,
            loading: false,
            authRedirectPath: '' 
        })
    });
});
