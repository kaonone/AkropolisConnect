import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Content, Button, Item, Label } from 'native-base';

import { Input } from 'shared/view/components';
import styles from './styles';

class SignTransaction extends Component<NavigationScreenProps> {
  public static navigationOptions = {
    title: 'Enter a data',
  };

  public state = {
    data: '0x000000000000000000000000000000',
    address: '0x000000000000000000000000000000',
    focusedInput: 0,
  };

  public render() {
    const { navigation } = this.props;
    const data = navigation.getParam('data', 'NO-ID');
    const address = navigation.getParam('address', 'some default value');

    return (
      <View style={styles.root}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.description}>To complete the transaction enter date and address</Text>
        </View>
        <View style={{ marginBottom: Platform.OS === 'android' ? 40 : 0 }}>
          <Input label={'Enter Data'} value={this.state.data} onChange={this.onChangeData} />
        </View>
        <View style={{ marginBottom: Platform.OS === 'android' ? 50 : 0 }}>
          <Input label={'Enter Adress'} value={this.state.address} onChange={this.onChangeAddress} last />
        </View>
        <Button
          block
          onPress={() => { }}
          style={styles.signTransactionButton}
        >
          <Text style={styles.signTransaction}>COMPLETE TRANSACTION</Text>
        </Button>

      </View >
    );
  }

  public onChangeData = (value: string) => this.setState({ data: value });
  public onChangeAddress = (value: string) => this.setState({ address: value });

}

export default SignTransaction;
