import api from "../api";

const ingredients = "INGREDIENTS";

export const GET_INGREDIENTS_REQUEST = `${ingredients}/GET_REQUEST`;
export const GET_INGREDIENTS_REQUEST_SUCCESS = `${ingredients}/GET_INGREDIENTS_SUCCESS`;
export const GET_INGREDIENTS_REQUEST_FAILED = `${ingredients}/GET_REQUEST_FAILED`;


export const getIngredients = () => {
    /* @ts-ignore */
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        });

        api.getIngredients()
            .then(result => {
                dispatch({
                    type: GET_INGREDIENTS_REQUEST_SUCCESS,
                    payload: result.data
                });
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: GET_INGREDIENTS_REQUEST_FAILED,
                    errorMessage: err
                });
            })


    }
}

