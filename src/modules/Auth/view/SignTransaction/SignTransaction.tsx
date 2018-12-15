import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Platform,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation'

class SignTransaction extends Component<NavigationScreenProps> {
  public static navigationOptions = {
    title: 'Enter a data',
    headerTintColor: Platform.OS === 'ios' ? undefined : 'white',
    headerStyle: {
      backgroundColor: Platform.OS === 'ios' ? undefined : '#6931b6',
    },
  }

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam('data', 'NO-ID');
    const address = navigation.getParam('address', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>To complete the transaction enter date and address</Text>
        <Text>Enter Data: {data}</Text>
        <Text>Enter Adress: {address}</Text>
      </View>
    );
  }
}

export default SignTransaction;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white'
  },
  main: {
    flex: .65,
    paddingTop: 50
  },
  signCodeButton: {
    borderRadius: 10,
    padding: 35,
    backgroundColor: '#6931b6',
    marginBottom: 30
  },
  signCode: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    flex: .35,
    paddingHorizontal: 40,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 50
  }
});
