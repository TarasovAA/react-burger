export const GET_INGREDIANTS_REQUEST = 'GET_INGREDIANTS_REQUEST';
export const GET_INGREDIANTS_REQUEST_SUCCESS = 'GET_INGREDIANTS_REQUEST_SUCCESS';
export const GET_INGREDIANTS_REQUEST_FAILED = 'GET_INGREDIANTS_REQUEST_FAILED';

export const ADD_INGREDIANT_DATA = 'ADD_INGREDIANT_DATA';
export const DELETE_INGREDIANT_DATA = 'DELETE_INGREDIANT_DATA';

export const SET_VIEWED_INGREDIANT_ITEM = 'SET_VIEWED_INGREDIANT_ITEM';
export const CLEAR_VIEWED_INGREDIANT_ITEM = 'CLEAR_VIEWED_INGREDIANT_ITEM';

export const REFRESH_ORDER_INDEX = "REFRESH_ORDER_INDEX";

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

export const refreshOrderIndex = () => {
    return function(dispatch){
        //обработка данных и получение заказа
        const orderIndex = Math.floor(Math.random() * (1000000 - 100000 + 1) + 100000);
        dispatch({
            type: REFRESH_ORDER_INDEX,
            payload: orderIndex
        });
    };
}