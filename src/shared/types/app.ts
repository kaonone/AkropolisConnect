import { NavigationScreenRouteConfig } from 'react-navigation';
import { Reducer } from 'redux';


export type ModuleReducer = { name: string, reducer: Reducer<any, any> };

export interface IModule {
  isInMainTab?: boolean,
  getRoutes(): { [key: string]: NavigationScreenRouteConfig },
  getReducer?: () => ModuleReducer,
}