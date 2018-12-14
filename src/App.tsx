import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import MainScreen from './modules/MainScreen'
import CodeScanner from './modules/CodeScanner'
import CompleteTransactionScreen from './modules/CompleteTransaction'

const scanCodeRoutes = createStackNavigator({
  Main: { screen: MainScreen },
  CodeScanner: { screen: CodeScanner },
});

const completeTransactionRoutes = createStackNavigator({
  CompleteTransaction: CompleteTransactionScreen
});

export default createSwitchNavigator({
  scanCode: scanCodeRoutes,
  CompleteTransaction: completeTransactionRoutes
}, { initialRouteName: 'scanCode' });
