import { combineReducers } from 'redux';
import { allCurrencyState} from './CurrencyReducer'
import { selectorState } from  './SelectorReducer'

const rootReducer = combineReducers({
    allCurrencyState,
    selectorState
});

export default rootReducer;
