import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import 'regenerator-runtime/runtime';
import createSagaMiddleware from 'redux-saga';
import { promosReducer as promotions } from './promos.reducer';
import { productsReducer as products } from './products.reducer';
import { ordersReducer as orders } from './orders.reducer';
import rootSaga from './redux-sagas/root-saga';

const initialState = {
	promotions: {
		inProgress: false,
		data: false,
		error: false,
	},
	products: {
		inProgress: false,
		data: false,
		error: false,
	}
};

/* eslint-disable-next-line no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
	promotions,
	products,
	orders,
	form,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
	reducer,
	initialState,
	composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);