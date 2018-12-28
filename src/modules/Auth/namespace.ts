import { IAction, IPlainFailAction, ICommunication } from 'shared/types/redux';
import { ITransaction } from 'shared/models/types';

export interface IReduxState {
  data: IDataState;
  communication: {
    loadingTransaction: ICommunication<string>;
  };
}

export interface IDataState {
  transaction: ITransaction | null;
}

export type ILoadTransaction = IAction<'AUTH:LOAD_TRANSACTION', { linkToTransaction: string }>;
export type ILoadTransactionCompleted = IAction<'AUTH:LOAD_TRANSACTION_COMPLETED',
  { transaction: ITransaction }>;
export type ILoadTransactionFail = IPlainFailAction<'AUTH:LOAD_TRANSACTION_FAIL'>;

export type IAction = ILoadTransaction | ILoadTransactionCompleted | ILoadTransactionFail;
