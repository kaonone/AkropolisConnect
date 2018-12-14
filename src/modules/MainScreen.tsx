import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Platform,
} from 'react-native';

import { Button } from 'native-base';
interface Props { }
export default class App extends Component<Props> {
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
              source={require('./shared/Phone.png')}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            block
            onPress={() => { }}
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
