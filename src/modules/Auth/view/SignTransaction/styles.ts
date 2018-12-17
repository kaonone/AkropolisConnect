import { StyleSheet, Platform } from 'react-native';
import getFont from 'shared/helpers/getFont';

export default StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  description: {
    marginTop: 50,
    marginBottom: 40,
    flex: 0.5,
    textAlign: 'center',
  },
  signTransactionButton: {
    marginHorizontal: Platform.OS === 'ios' ? 20 : 10,
    marginTop: Platform.OS === 'ios' ? 30 : 0,
    padding: 35,
    marginBottom: 30,
    backgroundColor: '#6931b6',
    borderRadius: 10,
  },

  signTransaction: {
    color: 'white',
    textTransform: 'uppercase',
    ...getFont(),
  },
});
