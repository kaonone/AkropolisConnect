import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

class SignTransaction extends Component<NavigationScreenProps> {
  public static navigationOptions = {
    title: 'Enter a data',
  };

  public render() {
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
