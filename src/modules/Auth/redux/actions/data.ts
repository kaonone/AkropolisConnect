import * as NS from '../../namespace';

export function setTransaction(payload: NS.ISetTransaction['payload']): NS.ISetTransaction {
  return {
    type: 'AUTH:SET_TRANSACTION',
    payload,
  };
}

export function transactionLinkingFail(error: string): NS.IParseTransactionLinkFail {
  return {
    type: 'AUTH:PARSE_TRANSACTION_LINK_FAIL',
    error,
  };
}
