import { makeSelectFeatureState, makeCommunicationSelector } from 'shared/helpers/redux';
import { IAppReduxState } from 'shared/types/app';
import { ITransaction } from 'shared/models/types';

export const selectFeatureState = makeSelectFeatureState('auth');

export const selectCommunication = makeCommunicationSelector(selectFeatureState);

export function selectTransaction(state: IAppReduxState): ITransaction | null {
  return selectFeatureState(state).data.transaction;
}
