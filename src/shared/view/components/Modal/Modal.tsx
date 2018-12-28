import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';

import Button from '../Button/Button';

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
            <Image
              style={{ marginBottom: 20 }}
              source={success ? require('./imgs/success.png') : require('./imgs/error.png')}
            />
            <Text style={styles.title}>{success ? 'Successfull !' : 'Error !'}</Text>
            <Text style={styles.description}>{descriptions}</Text>
            <Button
              onPress={onAcceptClick}
              text={acceptText}
            />
            {rejectText && onRejectClick &&
              <View style={{ marginTop: 20 }}>
                <Button
                  onPress={onRejectClick}
                  text={rejectText}
                  transparent
                />
              </View>
            }
          </View>
        </Modal>
      </View>
    );
  }
}
