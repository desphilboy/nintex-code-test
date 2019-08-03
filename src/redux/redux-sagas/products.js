import { call, put, select } from 'redux-saga/effects';
import { fetchProducts } from '../../apis/fetch-products.js';
import { productsFetchSuccess, productsFetchError } from '../products.reducer.js';

export function* productsSaga() {
   try {
   		console.log('hgjhggghghgjhgjhjfffhgffhgf', fetchProducts);
   		const products = yield call(fetchProducts);
   		console.log(products);
   		yield put(productsFetchSuccess(products));
   } catch (e) {
      console.log(e);
      yield put(productsFetchError(e));
   }
}
