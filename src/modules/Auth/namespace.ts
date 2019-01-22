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

export interface IQRCodeData {
  abiUrl: string;
  uuid: string;
}

export type ISetTransaction = IAction<'AUTH:SET_TRANSACTION', { linkToTransaction: string }>;

export type ILoadTransaction = IAction<'AUTH:LOAD_TRANSACTION', { linkToTransaction: string }>;
export type ILoadTransactionCompleted = IAction<'AUTH:LOAD_TRANSACTION_COMPLETED',
  { transaction: ITransaction }>;
export type ILoadTransactionFail = IPlainFailAction<'AUTH:LOAD_TRANSACTION_FAIL'>;

export type IParseTransactionLinkFail = IPlainFailAction<'AUTH:PARSE_TRANSACTION_LINK_FAIL'>;

export type IAction =
  ILoadTransaction | ILoadTransactionCompleted | ILoadTransactionFail
  | ISetTransaction | IParseTransactionLinkFail;
