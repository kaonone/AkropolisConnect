import { put, call, takeLatest } from 'redux-saga/effects';

import { IDependencies } from 'shared/types/app';

import * as actions from '../actions';
import * as NS from '../../namespace';

const signTransactionType: NS.ISignTransaction['type'] = 'AUTH:SIGN_TRANSACTION';

export function* rootSaga(deps: IDependencies) {
  yield takeLatest(signTransactionType, signTransaction, deps);
}

export function* signTransaction({ api }: IDependencies) {
  try {
    yield call(api.auth.signTransaction);
  } catch (error) {
    yield put(actions.signTransactionFail(error));
  }
}
