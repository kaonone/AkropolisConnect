import { combineReducers } from 'redux';
import { makeCommunicationReducer } from 'shared/helpers/redux';

import { ReducersMap } from 'shared/types/redux';
import * as NS from '../../namespace';

import initial from '../initial';

export const communicationReducer = combineReducers<NS.IReduxState['communication']>({
  signingTransaction: makeCommunicationReducer<
    NS.ISignTransaction,
    NS.ISignTransactionCompleted,
    NS.ISignTransactionFail>(
      'AUTH:SIGN_TRANSACTION',
      'AUTH:SIGN_TRANSACTION_COMPLETED',
      'AUTH:SIGN_TRANSACTION_FAIL',
      initial.communication.signingTransaction,
    ),
} as ReducersMap<NS.IReduxState['communication']>);
