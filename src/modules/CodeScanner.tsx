import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, Platform, Dimensions } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class App extends Component {
  public static navigationOptions = {
    title: 'Camera',
    headerTintColor: Platform.OS === 'ios' ? undefined : 'white',
    headerStyle: {
      backgroundColor: Platform.OS === 'ios' ? undefined : '#6931b6',
    },
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

  handleBarCodeRead = (qr) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});