import AuthModule from 'modules/Auth';
import { IModule, IModules, IAppReduxState } from 'shared/types/app';

import makeMainNavigator from './MakeNavigator';
import configureStore from './configureStore';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import { NavigationState } from 'react-navigation';

export default function initializeCore() {
  const modules: IModules = {
    Auth: new AuthModule(),
  };

  const MainNavigator = makeMainNavigator(modules);

  const modulesArray: IModule[] = Object.values(modules);

  const store = configureStore(modulesArray, MainNavigator);

  const mapStateToProps = (state: IAppReduxState) => ({
    state: state.nav,
  });
  const AppWithNavigationState =
    connect(mapStateToProps)(reduxifyNavigator(MainNavigator, 'ScannerPreview') as any);

  return { store, MainNavigator: AppWithNavigationState };
}
