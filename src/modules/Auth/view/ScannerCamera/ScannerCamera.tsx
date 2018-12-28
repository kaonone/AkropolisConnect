import React from 'react';
import { connect } from 'react-redux';
import { BarCodeScanner, Permissions } from 'expo';
import { Text, View, Image, ActivityIndicatorProps } from 'react-native';
import { NavigationScreenProps, StackActions, NavigationActions } from 'react-navigation';

import { actions } from '../../redux';

import styles from './styles';

interface IActionProps {
  loadTransaction: typeof actions.loadTransaction;
}

type IProps = NavigationScreenProps & IActionProps;

class ScannerCamera extends React.PureComponent<IProps> {
  public static navigationOptions = {
    title: 'Camera',
  };

  public state = {
    hasCameraPermission: null,
  };

  public componentDidMount() {
    this.requestCameraPermission();
  }

  public async requestCameraPermission() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  }

  public handleBarCodeRead = (qr: { data: string }) => {
    const linkToTransaction = qr.data;

    this.props.loadTransaction({ linkToTransaction });

    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'ScannerPreview' }),
        NavigationActions.navigate({ routeName: 'SignTransaction' }),
      ],
    });

    this.props.navigation.dispatch(resetAction);
  }

  public render() {
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text style={styles.noPermission}>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this.handleBarCodeRead}
              style={styles.barScanner}
            >
              <Image
                style={styles.target}
                source={require('./imgs/target.png')}
              />
            </BarCodeScanner>
        }
      </View>
    );
  }
}

const actionProps: IActionProps = {
  loadTransaction: actions.loadTransaction,
};

export default connect(null, actionProps)(ScannerCamera);
