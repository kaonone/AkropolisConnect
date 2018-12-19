import { StyleSheet, ViewStyle, ImageStyle } from 'react-native';
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
    backgroundColor: '#ecf0f1',
  },
  target: {
    marginTop: -40,
  },
});
