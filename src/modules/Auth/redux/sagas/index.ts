import { put, call, takeLatest } from 'redux-saga/effects';

import { IDependencies } from 'shared/types/app';
import { ITransaction } from 'shared/models/types';

import * as actions from '../actions';
import * as NS from '../../namespace';

const loadTransactionType: NS.ILoadTransaction['type'] = 'AUTH:LOAD_TRANSACTION';

export function* rootSaga(deps: IDependencies) {
  yield takeLatest(loadTransactionType, loadTransaction, deps);
}

export function* loadTransaction({ api }: IDependencies, action: NS.ILoadTransaction) {
  try {
    const transaction: ITransaction = yield call(api.auth.loadTransaction, action.payload.linkToTransaction);

    yield call(() => new Promise(res => setTimeout(res, 1000)));

    yield put(actions.loadTransactionCompleted({ transaction }));
  } catch (error) {
    yield put(actions.loadTransactionFail(error));
  }
}
