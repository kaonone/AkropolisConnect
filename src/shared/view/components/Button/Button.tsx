import React from 'react';
import { Button, Text } from 'native-base';
import { ViewStyle } from 'react-native';

import styles from './styles';

interface IProps {
  text: string;
  transparent?: boolean;
  onPress(): void;
}

export default class ButtonComponent extends React.PureComponent<IProps> {
  public render() {
    const { text, onPress, transparent } = this.props;
    return (
      <Button
        block
        onPress={onPress}
        style={transparent ? {} : styles.button as ViewStyle}
        transparent={transparent}
      >
        <Text style={transparent ? styles.coloredText : styles.text}>{text}</Text>
      </Button>
    );
  }
}
