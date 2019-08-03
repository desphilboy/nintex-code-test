import { takeLatest } from 'redux-saga/effects';
import { productsSaga } from './products';
import { promosSaga } from './promos';
import { PRODUCTS_FETCH_START } from '../products.reducer';
import { PROMOS_FETCH_START } from '../promos.reducer';



export function *rootSaga() {
	yield takeLatest(PRODUCTS_FETCH_START, productsSaga);
	yield takeLatest(PROMOS_FETCH_START, promosSaga);
}

export default rootSaga;