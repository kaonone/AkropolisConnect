import { makeCommunicationActionCreators } from 'shared/helpers/redux';

import * as NS from '../../namespace';

export const {
  execute: signTransaction,
  completed: signTransactionCompleted,
  failed: signTransactionFail,
} =
  makeCommunicationActionCreators<
    NS.ISignTransaction, NS.ISignTransactionCompleted, NS.ISignTransactionFail
  >(
    'AUTH:SIGN_TRANSACTION',
    'AUTH:SIGN_TRANSACTION_COMPLETED',
    'AUTH:SIGN_TRANSACTION_FAIL',
  );
