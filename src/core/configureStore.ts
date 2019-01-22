import {
  compose, applyMiddleware, createStore, combineReducers,
  Middleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import Api from 'service/api';
import LinkingManger from 'service/linkingManager';

import { actions as globalActions } from 'shared/redux';
import { IDependencies, IModule, IAppReduxState } from 'shared/types/app';

import { createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';
import { NavigationContainer } from 'react-navigation';

function configureStore(
  modules: IModule[],
  MainNavigator: NavigationContainer,
) {
  const modulesReducers = modules.reduce((reducers, module) => {
    if (module.getReducer) {
      const reducerData = module.getReducer();
      return { ...reducers, [reducerData.name]: reducerData.reducer };
    }
    return reducers;
  }, {});

  const navReducer = createNavigationReducer(MainNavigator);
  const reducer = (combineReducers({
    nav: navReducer,
    ...modulesReducers,
  }));

  const api = new Api();
  const linking = new LinkingManger();
  const extraArguments: IDependencies = {
    api,
    linking,
  };
  const sagaMiddleware = createSagaMiddleware();

  const navigationMiddleware = createReactNavigationReduxMiddleware(
    'ScannerPreview',
    (state: IAppReduxState) => state.nav,
  );

  const middlewares: Middleware[] = [
    navigationMiddleware,
    sagaMiddleware,
  ];

  const store = createStore(
    reducer,
    compose(applyMiddleware(...middlewares)),
  );

  modules.forEach((module: IModule) => {
    if (module.getSaga) {
      sagaMiddleware.run(module.getSaga(), extraArguments);
    }
  });

  store.dispatch(globalActions.makeAppStartedEvent());

  return store;
}

export default configureStore;
