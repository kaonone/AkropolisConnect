import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import { Button } from 'native-base';
import Modal from 'react-native-modal';

import styles from './styles';

interface IProps {
  isOpen: boolean;
  success: boolean;
  descriptions: string;
  acceptText: string;
  rejectText?: string;
  onAcceptClick(): void;
  onRejectClick?(): void;
}
export default class ModalComponent extends React.PureComponent<IProps> {

  public render() {
    const { success, descriptions, acceptText, onAcceptClick, rejectText, onRejectClick } = this.props;
    return (
      <View style={styles.container}>
        <Modal isVisible={this.props.isOpen}>
          <View style={styles.modalContent}>
            <Image style={{ marginBottom: 20 }} source={require('./imgs/success.png')} />
            <Text style={styles.title}>{success ? 'Successfull !' : 'Error !'}</Text>
            <Text style={styles.description}>{descriptions}</Text>
            <Button style={styles.button as any} block onPress={onAcceptClick}>
              <Text style={styles.buttonText} >{acceptText}</Text>
            </Button>
            {rejectText && onRejectClick &&
              <Button
                transparent
                block
                onPress={onRejectClick}
                style={{ marginTop: 20 }}
              >
                <Text style={[styles.buttonText, { color: '#6931b6' }]} >{rejectText}</Text>
              </Button>
            }
          </View>
        </Modal>
      </View>
    );
  }
}
