import {SELECT_CURRENCY } from '../action/SelectorAction';
import InitialState from "../store/InitialState";

const selectorState = (state = InitialState, action) => {
    switch (action.type) {
        case SELECT_CURRENCY:
            return Object.assign({}, state, {
                data: action.payload
            });
        default:
            return state;
    }
};

export {selectorState};
