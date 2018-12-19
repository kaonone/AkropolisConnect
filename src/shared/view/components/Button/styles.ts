import { StyleSheet, ViewStyle } from 'react-native';

import getFont from 'shared/helpers/getFont';
import { mainColor } from 'shared/constants';
import { ICommonStyle } from 'shared/types/app';

export default StyleSheet.create<ICommonStyle>({

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
