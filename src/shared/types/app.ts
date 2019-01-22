import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { NavigationScreenRouteConfig, NavigationState } from 'react-navigation';
import { SagaIterator } from 'redux-saga';
import { Reducer } from 'redux';
import { namespace as AuthNamespace } from 'modules/Auth';

import Api from 'service/api';
import LinkingManager from 'service/linkingManager';

export interface IModuleReducer {
  name: string;
  reducer: Reducer<any, any>;
}

export interface IModule {
  getRoutes(): { [key: string]: NavigationScreenRouteConfig };
  getReducer?(): IModuleReducer;
  getSaga?(): (deps: IDependencies) => SagaIterator;
}

export interface IAppReduxState {
  auth: AuthNamespace.IReduxState;

  nav: NavigationState;
}
export interface IDependencies {
  api: Api;
  linking: LinkingManager;
}
export interface ICommonStyle {
  [key: string]: ImageStyle | TextStyle | ViewStyle;
}

export type IModules = Record<'Auth', IModule>;
