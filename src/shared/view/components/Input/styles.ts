import { StyleSheet, Platform } from 'react-native';
import getFont from 'shared/helpers/getFont';

export default StyleSheet.create({

  iosView: {
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },

  iosLabel: {
    paddingHorizontal: 10,
    flexShrink: 0,
    flex: 0.35,
    color: '#0e0e0e',
    opacity: 0.65,
    ...getFont(),
  },

  iosValue: {
    paddingHorizontal: 10,
    margin: 0,
    flexShrink: 10,
    flex: 0.65,
  },

});
