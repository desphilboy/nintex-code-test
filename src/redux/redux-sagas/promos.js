import { call, put, select } from 'redux-saga/effects';
import { fetchPromos } from '../../apis/fetch-promos.js';
import { promosFetchSuccess, promosFetchError } from '../promos.reducer.js';

export function *promosSaga() {
   try {
   		const promotions = yield call(fetchPromos);
   		yield put(promosFetchSuccess(promotions));
   } catch (e) {
      yield put(promosFetchError(e));
   }
}
