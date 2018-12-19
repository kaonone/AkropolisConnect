import * as ns from '../namespace';
import { initialCommunicationField } from 'shared/helpers/redux';

const initialState: ns.IReduxState = {
  data: {
  },
  communication: {
    signingTransaction: initialCommunicationField,
  },
};

export default initialState;
