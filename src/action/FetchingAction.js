export default function fetchData(endpoint, request, displayResult, displayError) {
    return dispatch => {
        dispatch(request());
        return fetch(endpoint, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        },)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Server responded with error status: ' + response.status);
                }
                return response.json();
            })
            .then(json => {
                const errorMsg = getErrorResponse(json);
                if (errorMsg) {
                    dispatch(displayError(errorMsg));
                } else {
                    dispatch(displayResult(json));
                }
            })
            .catch(error => dispatch(displayError(error.message)));
    };
}

function getErrorResponse(json) {
    if (json.error) {
        return json.error;
    } else {
        if (json.redirectUrl !== undefined && json.redirectUrl !== null) {
            window.location.replace(json.redirectUrl);
        } else return json.errorDetails;
    }
}