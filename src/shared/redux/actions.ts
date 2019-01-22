import * as NS from './namespace';

export function makeAppStartedEvent(): NS.IAppStartedEvent {
  return { type: 'global:appStarted' };
}
