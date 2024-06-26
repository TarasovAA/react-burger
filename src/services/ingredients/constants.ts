const ingredients = "INGREDIENTS";

const GET_INGREDIENTS_REQUEST_TYPE = `${ingredients}/GET_REQUEST`;
const GET_INGREDIENTS_REQUEST_SUCCESS_TYPE = `${ingredients}/GET_INGREDIENTS_SUCCESS`;
const GET_INGREDIENTS_REQUEST_FAILED_TYPE = `${ingredients}/GET_REQUEST_FAILED`;

export const GET_INGREDIENTS_REQUEST: typeof GET_INGREDIENTS_REQUEST_TYPE = GET_INGREDIENTS_REQUEST_TYPE;
export const GET_INGREDIENTS_REQUEST_SUCCESS: typeof GET_INGREDIENTS_REQUEST_SUCCESS_TYPE  = GET_INGREDIENTS_REQUEST_SUCCESS_TYPE;
export const GET_INGREDIENTS_REQUEST_FAILED: typeof GET_INGREDIENTS_REQUEST_FAILED_TYPE = GET_INGREDIENTS_REQUEST_FAILED_TYPE;