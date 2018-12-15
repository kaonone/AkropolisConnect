import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { IModules } from 'shared/types/app';
import getFont from 'shared/helpers/getFont';

export default function makeMainNavigator(modules: IModules) {

  const { Auth } = modules;

  const routes = createStackNavigator({
    ...Auth.getRoutes(),
  }, {
      navigationOptions: {
        headerTintColor: Platform.OS === 'ios' ? undefined : 'white',
        headerTitleStyle: {
          ...getFont(),
        },
        headerStyle: {
          backgroundColor: Platform.OS === 'ios' ? undefined : '#6931b6',
        },
      },
    });

  return routes;
}
