import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProps, StackActions, NavigationActions } from 'react-navigation';
import { Spinner } from 'native-base';

import { Input, Modal, Button } from 'shared/view/components';
import { ITransaction } from 'shared/models/types';
import { IAppReduxState } from 'shared/types/app';
import { ICommunication } from 'shared/types/redux';

import { selectors } from '../../redux';
import styles from './styles';

interface IStateProps {
  transaction: ITransaction | null;
  loadingTransaction: ICommunication;
}

interface IState {
  data: string;
  address: string;
  isOpenModal: boolean;
}

type IProps = IStateProps & NavigationScreenProps;

class SignTransaction extends Component<IProps, IState> {
  public static navigationOptions = {
    title: 'Enter a data',
  };

  public state: IState = {

    data: '',
    address: '',
    isOpenModal: false,
  };

  public componentDidUpdate(prevProps: IProps) {
    const { loadingTransaction, transaction } = this.props;
    if (prevProps.loadingTransaction.isRequesting && !loadingTransaction.isRequesting && transaction) {
      this.setState({ address: transaction.address, data: transaction.data });
    }
  }

  public render() {
    const { loadingTransaction } = this.props;

    if (loadingTransaction.isRequesting) {
      return <Spinner color="black" />;
    }

    if (loadingTransaction.error) {
      return <Text style={styles.error}>an error occurred while loading the data for the transaction</Text>;
    }

    return (
      <View style={styles.root}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.description}>To complete the transaction enter date and address</Text>
        </View>
        <View style={{ marginBottom: Platform.OS === 'android' ? 40 : 0 }}>
          <Input label={'Enter Data'} value={this.state.data} onChange={this.onChangeData} />
        </View>
        <View style={{ marginBottom: Platform.OS === 'android' ? 50 : 0 }}>
          <Input label={'Enter Address'} value={this.state.address} onChange={this.onChangeAddress} last />
        </View>
        <View style={styles.signTransaction}>
          <Button
            onPress={this.openModal}
            text="COMPLETE TRANSACTION"
          />
        </View>
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
    setTimeout(() => this.props.navigation.dispatch(resetAction), 350); // for smooth animation after closing modal
  }

  public redirectToStartPage = () => {
    this.closeModal();

    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'ScannerPreview' }),
      ],
    });
    setTimeout(() => this.props.navigation.dispatch(resetAction), 350); // for smooth animation after closing modal
  }
}

function mapState(state: IAppReduxState): IStateProps {
  return {
    loadingTransaction: selectors.selectCommunication(state, 'loadingTransaction'),
    transaction: selectors.selectTransaction(state),
  };
}

export default connect(mapState)(SignTransaction);
