export interface IAppStartedEvent {
  type: 'global:appStarted';
}

export const appStartedEvent: IAppStartedEvent['type'] = 'global:appStarted';
