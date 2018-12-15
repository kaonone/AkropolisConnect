import React from 'react';
import { Text, View, Alert, Dimensions } from 'react-native';
import { NavigationScreenProps } from 'react-navigation'
import { BarCodeScanner, Permissions } from 'expo';

import styles from './styles'

export default class ScannerCamera extends React.PureComponent<NavigationScreenProps> {
  public static navigationOptions = {
    title: 'Camera',
  }

  state = {
    hasCameraPermission: null
  };

  componentDidMount() {
    this.requestCameraPermission();
  }

  public async requestCameraPermission() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  handleBarCodeRead = (qr: { data: string }) => {
    const data = qr.data.split('/');
    Alert.alert(
      'Scan successful!',
      `address: ${data[0]} / data: ${data[1]}`
    );

    this.props.navigation.navigate('CompleteTransaction', {
      data: data[0],
      address: data[1],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this.handleBarCodeRead}
              style={{
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
              }}
            />
        }
      </View>
    );
  }
}
