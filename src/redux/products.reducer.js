import { createActions, combineActions, handleActions } from 'redux-actions';

export const PRODUCTS_FETCH_START = 'PRODUCTS_FETCH_START';
export const PRODUCTS_FETCH_SUCCESS = 'PRODUCTS_FETCH_SUCCESS';
export const PRODUCTS_FETCH_ERROR = 'PRODUCTS_FETCH_ERROR';

export const { productsFetchStart, productsFetchSuccess, productsFetchError } = createActions({
	PRODUCTS_FETCH_START: () => ({ inProgress: true, error: false, data: false }),
	PRODUCTS_FETCH_SUCCESS: (data) =>({ inProgress: false, error: false, data }) ,
	PRODUCTS_FETCH_ERROR: (error) => ({ inProgress: false, error, data: false }),
});

export const productsReducer = handleActions(
	{
		[combineActions(productsFetchStart, productsFetchSuccess, productsFetchError)]: (state, action) => ({
			...state,
			...action.payload,
		}),
	},
	{ inProgress: false, error: false, data: false, },
);
