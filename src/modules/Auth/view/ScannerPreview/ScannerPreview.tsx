import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation'
import { Button } from 'native-base';

export default class ScannerPreview extends Component<NavigationScreenProps> {
  public static navigationOptions = {
    title: 'Acropolis',
    headerTintColor: Platform.OS === 'ios' ? undefined : 'white',
    headerStyle: {
      backgroundColor: Platform.OS === 'ios' ? undefined : '#6931b6',
    },
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.main}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('./Phone.png')}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            block
            onPress={() => this.props.navigation.navigate('ScannerCamera')}
            style={styles.signCodeButton}
          >
            <Text style={styles.signCode}>SCAN QR-CODE</Text>
          </Button>
          <View style={{ paddingHorizontal: 40 }}>
            <Text style={{ textAlign: 'center' }}>Please scan QR-code in your web app</Text>
          </View>
        </View>
      </View>
    );
  }
}

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
