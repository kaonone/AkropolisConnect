import { combineReducers } from 'redux';
import { makeCommunicationReducer } from 'shared/helpers/redux';

import { ReducersMap } from 'shared/types/redux';
import * as NS from '../../namespace';

import initial from '../initial';

export default combineReducers<NS.IReduxState['communication']>({
  loadingTransaction: makeCommunicationReducer<
    NS.ILoadTransaction,
    NS.ILoadTransactionCompleted,
    NS.ILoadTransactionFail>(
      'AUTH:LOAD_TRANSACTION',
      'AUTH:LOAD_TRANSACTION_COMPLETED',
      'AUTH:LOAD_TRANSACTION_FAIL',
      initial.communication.loadingTransaction,
    ),
} as ReducersMap<NS.IReduxState['communication']>);
