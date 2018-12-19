import { NavigationScreenRouteConfig } from 'react-navigation';
import { SagaIterator } from 'redux-saga';
import { Reducer } from 'redux';

import Api from 'service/api';

export interface IModuleReducer {
  name: string;
  reducer: Reducer<any, any>;
}

export interface IModule {
  getRoutes(): { [key: string]: NavigationScreenRouteConfig };
  getReducer?(): IModuleReducer;
  getSaga?(): (deps: IDependencies) => SagaIterator;
}

export interface IDependencies {
  api: Api;
}
export type IModules = Record<'Auth', IModule>;
