import {
  compose, applyMiddleware, createStore, combineReducers,
  Middleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import Api from 'service/api';
import { IDependencies, IModule } from 'shared/types/app';

function configureStore(
  modules: IModule[],
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

  const api = new Api();
  const extraArguments: IDependencies = {
    api,
  };
  const sagaMiddleware = createSagaMiddleware();

  const middlewares: Middleware[] = [
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

  return store;
}

export default configureStore;
