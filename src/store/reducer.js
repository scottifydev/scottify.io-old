/* eslint complexity: 0 */

import * as actionTypes from './actions';

const initialState = {
    page: 1,
    pips: [],
    pipNumber: 4,
    changing: true,
    changeDelay: 300,
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
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
    case actionTypes.PIP_CLICK:
        return Object.assign( {}, state, {
            page: action.payload,
        } );
    default:
        return state;
    }
};

export default reducer;
