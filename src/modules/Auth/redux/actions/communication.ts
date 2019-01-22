import { makeCommunicationActionCreators } from 'shared/helpers/redux';

import * as NS from '../../namespace';

export const {
  execute: loadTransaction,
  completed: loadTransactionCompleted,
  failed: loadTransactionFail,
} =
  makeCommunicationActionCreators<
    NS.ILoadTransaction, NS.ILoadTransactionCompleted, NS.ILoadTransactionFail
  >(
    'AUTH:LOAD_TRANSACTION',
    'AUTH:LOAD_TRANSACTION_COMPLETED',
    'AUTH:LOAD_TRANSACTION_FAIL',
  );
