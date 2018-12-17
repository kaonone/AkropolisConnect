import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Button } from 'native-base';

import styles from './styles';

export default class ScannerPreview extends Component<NavigationScreenProps> {
  public static navigationOptions = {
    title: 'Acropolis',
  };

  public render() {
    return (
      <View style={styles.root}>
        <View style={styles.main}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('./imgs/Phone.png')}
            />
            <Image
              source={require('./imgs/qr.png')}
              style={{ marginTop: -380 }}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            block
            onPress={this.onScanCode}
            style={styles.signCodeButton as any}
          >
            <Text style={styles.signCode}>SCAN QR-CODE</Text>
          </Button>
          <View style={{ paddingHorizontal: 40 }}>
            <Text style={styles.description}>Please scan QR-code in your web app</Text>
          </View>
        </View>
      </View>
    );
  }

  public onScanCode = () => {
    this.props.navigation.navigate('ScannerCamera');
  }
}
