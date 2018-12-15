import { createStackNavigator, createSwitchNavigator } from 'react-navigation'


export default function makeMainNavigator(modules: any) {

  const { Auth } = modules;

  const routes = createStackNavigator({
    ...Auth.getRoutes()
  });

  // const completeTransactionRoutes = createStackNavigator({
  //   CompleteTransaction: CompleteTransactionScreen
  // });

  // export default createSwitchNavigator({
  //   scanCode: scanCodeRoutes,
  //   CompleteTransaction: completeTransactionRoutes
  // }, { initialRouteName: 'scanCode' });

  return routes;
}

