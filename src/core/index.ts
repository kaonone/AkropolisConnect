import makeMainNavigator from './MakeNavigator';
import configureStore from './configureStore';

import AuthModule from '../modules/Auth';


import { IModule } from 'shared/types/app';

export default function initializeCore(): { store: any, MainNavigator: any } {
  const modules = {
    Auth: new AuthModule(),
  };

  const MainNavigator = makeMainNavigator(modules);

  const modulesArray: IModule[] = Object.keys(modules).map(key => modules[key]);

  const store = configureStore(modulesArray, []);

  return { store, MainNavigator };
}
