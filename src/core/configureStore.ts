import {
  compose, applyMiddleware, createStore, combineReducers, Reducer,
  Middleware,
} from 'redux';

import { IModule } from 'shared/types/app';

function configureStore(
  modules: IModule[],
  middlewares: Middleware[],
) {
  const modulesReducers = modules.reduce((reducers, module) => {
    if (module.getReducer) {
      const reducerData = module.getReducer();
      return { ...reducers, [reducerData.name]: reducerData.reducer };
    }
    return reducers;
  }, {});

  const reducer = (combineReducers({
    ...modulesReducers,
  }));

  return (createStore(
    reducer,
    compose(applyMiddleware(...middlewares)),
  ));
}

export default configureStore;
