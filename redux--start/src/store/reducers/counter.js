import * as actionTypes from '../actions';

const initialState = {
    counter:0
}
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.INCREMENT:
            let newState = Object.assign({}, state);
            newState = state.counter;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
    }
    
    return state;
}

export default reducer;