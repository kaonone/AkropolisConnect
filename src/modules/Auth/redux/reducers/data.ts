// @flow
import { IDataState } from '../../namespace';
import initial from '../initial';

function reducer(state: IDataState = initial.data, action: any): IDataState {
  return state;
  // switch (action.type) {
  //   default:
  //     return state;
  // }
}

export default reducer;
