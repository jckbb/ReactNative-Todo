import * as React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import styles from './styles';
import { withDefaultProps } from '../../utils/helpers';

const defaultProps = {
};

type DefaultProps = typeof defaultProps;
type Props = {
  onPress(event: GestureResponderEvent): void
} & DefaultProps;

class Button extends React.Component<Props> {
  render() {
    const { onPress, children } = this.props;

    return(
      <TouchableOpacity
        style={styles.container}
        onPress={onPress} >
        <Text style={styles.text} >
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
}

const ButtonWithDefaultProps = withDefaultProps(defaultProps, Button);

export default ButtonWithDefaultProps;