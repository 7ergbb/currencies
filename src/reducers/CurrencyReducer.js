import {CURRENCY_ERROR, CURRENCY_IS_FETCHING, CURRENCY_RESPONSE} from '../action/CurrencyAction';
import InitialState from "../store/InitialState";

const allCurrencyState = (state = InitialState, action) => {
    switch (action.type) {
        case CURRENCY_IS_FETCHING:
            return Object.assign({}, state, {
                isFetching: true
            });
        case CURRENCY_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                serviceError: action.serviceError
            });
        case CURRENCY_RESPONSE:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload.Valute
            });
        default:
            return state;
    }
};

export {allCurrencyState};
