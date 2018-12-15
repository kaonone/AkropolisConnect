import { StyleSheet } from 'react-native';
import getFont from 'shared/helpers/getFont';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white'
  },
  main: {
    flex: .65,
    paddingTop: 50
  },
  signCodeButton: {
    borderRadius: 10,
    padding: 35,
    backgroundColor: '#6931b6',
    marginBottom: 30,

  },
  signCode: {
    color: 'white',
    ...getFont(),
  },
  description: {
    textAlign: 'center',
    ...getFont(),
  },
  footer: {
    flex: .35,
    paddingHorizontal: 40,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 50
  }
});