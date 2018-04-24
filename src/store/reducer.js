import * as actionTypes from './actions';


const initialState = {
    page: 1,
    pips: [],
    pipNumber: 4
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
        case actionTypes.PIPS:
            console.log('PIPS', action.payload)
            return Object.assign({}, state, {
                pips: action.payload
            });
        default:
            return state;
    }
    
};

export default reducer;