import * as React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent, RegisteredStyle, ViewStyle } from 'react-native';
import styles from './styles';

interface Props {
  onPress(event: GestureResponderEvent): void
  styling: RegisteredStyle<ViewStyle>
};

class Button extends React.Component<Props> {
  render() {
    const { onPress, children, styling } = this.props;

    return(
      <TouchableOpacity
        style={[styles.container, styling]}
        onPress={onPress} >
        <Text style={styles.text} >
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Button;