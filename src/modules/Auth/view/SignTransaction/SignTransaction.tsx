import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { NavigationScreenProps, StackActions, NavigationActions } from 'react-navigation';
import { Button } from 'native-base';

import { Input, Modal } from 'shared/view/components';
import styles from './styles';

interface IState {
  data: string;
  address: string;
  isOpenModal: boolean;
}
class SignTransaction extends Component<NavigationScreenProps, IState> {
  public static navigationOptions = {
    title: 'Enter a data',
  };

  public state: IState = {
    data: this.props.navigation.getParam('data', ''),
    address: this.props.navigation.getParam('address', ''),
    isOpenModal: false,
  };

  public render() {
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
          onPress={this.openModal}
          style={styles.signTransactionButton as any}
        >
          <Text style={styles.signTransaction}>COMPLETE TRANSACTION</Text>
        </Button>
        {this.renderModal({ success: false })}
      </View >
    );
  }

  public onChangeData = (value: string) => this.setState({ data: value });
  public onChangeAddress = (value: string) => this.setState({ address: value });

  public renderModal = ({ success }: { success: boolean }) => {

    if (success) {
      return (
        <Modal
          isOpen={this.state.isOpenModal}
          success={success}
          descriptions="Your transaction is sucsesfull go to desktop app"
          acceptText="OK, THANKS"
          onAcceptClick={this.closeModal}
        />
      );
    } else {
      return (
        <Modal
          isOpen={this.state.isOpenModal}
          success={success}
          descriptions="Something goes wrong. Please try agian"
          acceptText="TRY AGAIN"
          onAcceptClick={this.redirectToCamera}
          rejectText="DECIDE LATER"
          onRejectClick={this.redirectToStartPage}
        />
      );
    }
  }

  public closeModal = () => {
    this.setState({ isOpenModal: false });
  }

  public openModal = () => {
    this.setState({ isOpenModal: true });
  }

  public redirectToCamera = () => {
    this.closeModal();

    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'ScannerPreview' }),
        NavigationActions.navigate({ routeName: 'ScannerCamera' }),
      ],
    });

    this.props.navigation.dispatch(resetAction);
  }

  public redirectToStartPage = () => {
    this.closeModal();

    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'ScannerPreview' }),
      ]
    });

    this.props.navigation.dispatch(resetAction);
  }
}

export default SignTransaction;
