import { createStackNavigator } from 'react-navigation'


export default function makeMainNavigator(modules: any) {

  const { Auth } = modules;

  const routes = createStackNavigator({
    ...Auth.getRoutes()
  });

  return routes;
}

