import { Platform } from 'react-native';


type fontWeightType = '200' | 'normal' | 'bold' | '100' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;

export default function getFont() {
  return {
    fontWeight: '200' as fontWeightType,
    fontFamily: Platform.OS === 'ios' ? 'SFUIDisplay-Medium' : 'Roboto-Regular'
  };
}
