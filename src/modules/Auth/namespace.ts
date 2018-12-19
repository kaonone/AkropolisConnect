import { IPlainAction, IAction, IPlainFailAction, ICommunication } from 'shared/types/redux';

export interface IReduxState {
  data: IDataState;
  communication: {
    signingTransaction: ICommunication<string>;
  };
}

export interface IDataState { }

export type ISignTransaction = IPlainAction<'AUTH:SIGN_TRANSACTION'>;
export type ISignTransactionCompleted = IAction<'AUTH:SIGN_TRANSACTION_COMPLETED',
  { isAccepted: boolean }>;
export type ISignTransactionFail = IPlainFailAction<'AUTH:SIGN_TRANSACTION_FAIL'>;
