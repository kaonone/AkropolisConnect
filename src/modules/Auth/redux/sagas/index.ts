import { put, call, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { NavigationActions } from 'react-navigation';

import { IDependencies } from 'shared/types/app';
import { ITransaction } from 'shared/models/types';

import * as actions from '../actions';
import * as NS from '../../namespace';
import { makeLinkingChannel } from 'service/linkingManager';
import notifyWithToast from 'shared/redux/notifyWithToast';

const loadTransactionType: NS.ILoadTransaction['type'] = 'AUTH:LOAD_TRANSACTION';

export function* rootSaga(deps: IDependencies) {
  yield takeLatest(makeLinkingChannel('transaction', deps.linking), handleAppLinking);
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

export function* handleAppLinking(appLinkPayload: string) {
  try {
    yield delay(100); // at current sdk expo fire url event three time at standalone

    const abiPayload: NS.IQRCodeData = JSON.parse(appLinkPayload);
    if (abiPayload.abiUrl) {
      yield put(actions.loadTransaction({ linkToTransaction: abiPayload.abiUrl }));
      yield put(NavigationActions.navigate({ routeName: 'SignTransaction' }));
    }
  } catch (error) {
    yield put(actions.transactionLinkingFail(error));
    yield* notifyWithToast({ text: 'An error occurred while processing the link' });
  }
}
