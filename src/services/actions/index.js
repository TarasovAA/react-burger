export const GET_INGREDIANTS_REQUEST = 'GET_INGREDIANTS_REQUEST';
export const GET_INGREDIANTS_REQUEST_SUCCESS = 'GET_INGREDIANTS_REQUEST_SUCCESS';
export const GET_INGREDIANTS_REQUEST_FAILED = 'GET_INGREDIANTS_REQUEST_FAILED';

export const GET_INGREDIANTS_CONSTRUCTOR = 'GET_INGREDIANTS_CONSTRUCTOR';

export const ADD_INGREDIANT_DATA = 'ADD_INGREDIANT_DATA';

export const DELETE_INGREDIANT_DATA = 'DELETE_INGREDIANT_DATA';

export const GET_ORDER_DETAILS = 'GET_ORDER_DETAILS';

const url = 'https://norma.nomoreparties.space/api/ingredients';

export const getIngrediants = () => {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIANTS_REQUEST
        });

        fetch(url)
            .then(result => {
                if (!result.ok)
                    return Promise.reject(`Ошибка ${result.status}`);
                return result.json();
            })
            .then(result => {
                dispatch({
                    type: GET_INGREDIANTS_REQUEST_SUCCESS,
                    payload: result.data
                });
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: GET_INGREDIANTS_REQUEST_FAILED,
                    errorMessage: err
                });
            })


    }
}