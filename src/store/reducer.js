import * as actionTypes from './actions';

const initialState = {
    page: 1,
    pips: [],
    pipNumber: 4,
    changing: true,
    changeDelay: 300
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FORWARD:
            console.log('FORWARD')
            return Object.assign({}, state, {
                page: state.page + 1 
            });
        case actionTypes.BACKWARD:
            console.log('BACKWARD')
            return Object.assign({}, state, {
                page: state.page - 1
            });
        case actionTypes.CHANGING:
            console.log('CHANGING', state.changing)
            return Object.assign({}, state, {
                changing: !state.changing
            });
        case actionTypes.PIPS:
            console.log('PIPS', action.payload)
            return Object.assign({}, state, {
                pips: action.payload
            });
        case actionTypes.PIP_CLICK:
            console.log('PIP_CLICK', action.payload)
            return Object.assign({}, state, {
                page: action.payload
            });
        default:
            return state;
    }
    
};

export default reducer;