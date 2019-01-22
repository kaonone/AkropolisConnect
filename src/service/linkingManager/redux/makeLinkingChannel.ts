import { eventChannel } from 'redux-saga';

import LinkingManager from '../LinkingManager';
import { PathTypes } from '../namespace';

export default function makeLinkingChannel(type: PathTypes, linkingManager: LinkingManager) {
  return eventChannel<string>(emitter => linkingManager.subscribe(type, emitter));
}
