import { createActions, combineActions, handleActions } from 'redux-actions';

export const PROMOS_FETCH_START = 'PROMOS_FETCH_START';
export const PROMOS_FETCH_SUCCESS = 'PROMOS_FETCH_SUCCESS';
export const PROMOS_FETCH_ERROR = 'PROMOS_FETCH_ERROR';

export const { promosFetchStart, promosFetchSuccess, promosFetchError } = createActions({
	PROMOS_FETCH_START: () => ({ inProgress: true, error: false, data: false }),
	PROMOS_FETCH_SUCCESS: (data) =>({ inProgress: false, error: false, data }) ,
	PROMOS_FETCH_ERROR: (error) => ({ inProgress: false, error, data: false }),
});

export const promosReducer = handleActions(
	{
		[combineActions(promosFetchStart, promosFetchSuccess, promosFetchError)]: (state, action) => ({
			...state,
			...action.payload,
		}),
	},
	{ inProgress: false, error: false, data: false, },
);
