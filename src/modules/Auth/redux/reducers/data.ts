import { IDataState, IAction } from '../../namespace';
import initial from '../initial';

function reducer(state: IDataState = initial.data, action: IAction): IDataState {
  switch (action.type) {

    case 'AUTH:LOAD_TRANSACTION_COMPLETED':
      return {
        ...state,
        transaction: action.payload.transaction,
      };
    default:
      return state;
  }
}

export default reducer;
