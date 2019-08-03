import { createActions, combineActions, handleActions } from 'redux-actions';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const { addToCart, removeFromCart } = createActions({
	ADD_TO_CART: (product) => ({ product }),
	REMOVE_FROM_CART: (product) =>({ product }) ,
});

export const ordersReducer = handleActions(
	{
		ADD_TO_CART: (state, { payload }) => {
			const productId = payload && payload.product && payload.product.id;

			if (!!state[productId]) {
				const num = state[productId].num + 1;
				const product = Object.assign({}, state[productId], { num });
				return Object.assign({}, state, { [productId]: product });
			} else {
				const num = 1;
				const product = Object.assign({}, payload.product, { num });
				return Object.assign({}, state, { [productId]: product })

			}	
		},
		REMOVE_FROM_CART: (state, { payload }) => {
			const productId = payload && payload.product && payload.product.id;

			if (!!state[productId] && state[productId].num > 0) {
				const num = state[productId].num - 1;
				const product = Object.assign({}, state[productId], { num });
				return Object.assign({}, state, { [productId]: product });
			} else {
				return state;
			}
		},
	},
	{},
);
