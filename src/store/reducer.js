/* eslint complexity: 0 */

import * as actionTypes from './actions';

const initialState = {
    page: 1,
    pips: [],
    pages: [],
    pipNumber: 4,
    changing: true,
    changeDelay: 300,
    isLoading: true,
    introStopped: false,
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOADING:
            return Object.assign( {}, state, {
                isLoading: false,
            } );
        case actionTypes.FORWARD:
            return Object.assign( {}, state, {
                page: state.page + 1,
            } );
        case actionTypes.BACKWARD:
            return Object.assign( {}, state, {
                page: state.page - 1,
            } );
        case actionTypes.CHANGING:
            return Object.assign( {}, state, {
                changing: !state.changing,
            } );
        case actionTypes.PIPS:
            return Object.assign( {}, state, {
                pips: action.payload,
            } );
        case actionTypes.PAGES:
            return Object.assign( {}, state, {
                pages: action.payload,
            } );
        case actionTypes.PIP_CLICK:
            return Object.assign( {}, state, {
                page: action.payload,
            } );
        case actionTypes.STOP_INTRO:
            return Object.assign( {}, state, {
                introStopped: true,
            } );
        default:
            return state;
    }
};

export default reducer;
