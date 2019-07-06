import fetchData from './FetchingAction.js';

export const CURRENCY_RESPONSE = 'CURRENCY_RESPONSE';
export const CURRENCY_ERROR = 'CURRENCY_ERROR';
export const CURRENCY_IS_FETCHING = 'CURRENCY_IS_FETCHING';

const API_URL = 'https://cors-anywhere.herokuapp.com/https://www.cbr-xml-daily.ru/daily_json.js';

export const displayResult = (json) => ({
    type: CURRENCY_RESPONSE,
    payload: json
});

export const displayError = (serviceError) => ({
    type: CURRENCY_ERROR,
    serviceError: serviceError
});

export const isFetching = () => ({
    type: CURRENCY_IS_FETCHING
});

export function getCurrency() {
    return fetchData(API_URL, isFetching, displayResult, displayError);
}
