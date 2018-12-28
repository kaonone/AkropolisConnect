import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { NavigationScreenRouteConfig } from 'react-navigation';
import { Reducer } from 'redux';

export interface IModuleReducer {
  name: string;
  reducer: Reducer<any, any>;
}

export interface IModule {
  isInMainTab?: boolean;
  getRoutes(): { [key: string]: NavigationScreenRouteConfig };
  getReducer?(): IModuleReducer;
}

export interface ICommonStyle {
  [key: string]: ImageStyle | TextStyle | ViewStyle;
}

export type IModules = Record<'Auth', IModule>;
