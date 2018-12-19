import { StyleSheet } from 'react-native';
import getFont from 'shared/helpers/getFont';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  main: {
    flex: .6,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  phoneImage: {
    flexShrink: 1,
    width: '100%',
    resizeMode: 'cover',
  },

  signCode: {
    marginBottom: 30,
    width: '100%',
  },

  description: {
    textAlign: 'center',
    ...getFont(),
  },
  footer: {
    flex: .3,
    paddingHorizontal: 40,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 50,
  },
});
