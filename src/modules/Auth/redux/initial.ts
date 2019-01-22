import * as ns from '../namespace';
import { initialCommunicationField } from 'shared/helpers/redux';

const initialState: ns.IReduxState = {
  data: {
    transaction: null,
  },
  communication: {
    loadingTransaction: initialCommunicationField,
  },
};

export default initialState;
