import { call } from 'redux-saga/effects';
import { Toast } from 'native-base';

interface ISettings {
  text: string;
  supportedOrientations?: Array<'portrait' | 'landscape'>;
  position?: 'top' | 'bottom' | 'center';
  duration?: number;
}

function* notifyWithToast({
  text,
  duration = 4000,
  position = 'bottom',
  supportedOrientations = ['portrait', 'landscape'],
}: ISettings) {

  yield call([Toast, Toast.show] as any, {
    text,
    supportedOrientations,
    position,
    duration,
  });
}

export default notifyWithToast;
