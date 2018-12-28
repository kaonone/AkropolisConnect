import { StyleSheet, Dimensions, ImageStyle } from 'react-native';
import { Constants } from 'expo';

import { ICommonStyle } from 'shared/types/app';

interface IStyle extends ICommonStyle {
  target: ImageStyle;
}

export default StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
  },

  barScanner: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noPermission: {
    color: 'white',
  },

  target: {
    marginTop: -40,
  },
});
