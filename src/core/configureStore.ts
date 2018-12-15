// @flow
import {
  compose, applyMiddleware, createStore, combineReducers, Reducer,
  Middleware,
} from 'redux';

import { NavigationNavigator } from 'react-navigation';


import { IModule } from 'shared/types/app';

function configureStore(
  modules: IModule[],
  // AppNavigator: NavigationNavigator<*, *, *, *>,
  middlewares: Middleware[],
) {
  const modulesReducers = modules.reduce((reducers, module) => {
    if (module.getReducer) {
      const reducerData = module.getReducer();
      return { ...reducers, [reducerData.name]: reducerData.reducer };
    }
    return reducers;
  }, {});

  // TODO change initial route
  // const initialNavState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('AppLoading'));
  // const navReducer = (state, action) => {
  //   if (!state || !action) return initialNavState;
  //   const nextState = AppNavigator.router.getStateForAction(action, state);
  //   return nextState || state;
  // };

  const reducer = (combineReducers({
    ...modulesReducers,
  }));

  return (createStore(
    reducer,
    compose(applyMiddleware(...middlewares)),
  ));
}

export default configureStore;
