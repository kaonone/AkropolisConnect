import { StyleSheet } from 'react-native';
import getFont from 'shared/helpers/getFont';
import { mainColor } from 'shared/constants';

export default StyleSheet.create({

  button: {
    borderRadius: 10,
    padding: 35,
    backgroundColor: mainColor,
  },
  text: {
    color: 'white',
    ...getFont(),
  },

  coloredText: {
    color: mainColor,
    ...getFont(),
  },

});
