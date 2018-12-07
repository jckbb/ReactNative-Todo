import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface Props {
  complete: boolean,
  handleCompleteChange(): void
  children: string
};

class RadioButton extends React.Component<Props> {
  handleChange() {
    this.props.handleCompleteChange();
  }

  render() {
    return(
      <TouchableOpacity
        style={styles.radioButtonContainer}
        onPress={this.handleChange.bind(this)} >
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

export default RadioButton;