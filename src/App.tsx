import { createStackNavigator } from 'react-navigation'
import MainScreen from './modules/MainScreen'


export default createStackNavigator({
  // tslint:disable:object-literal-sort-keys
  Main: { screen: MainScreen }
})