import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
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

  showCompletedText() {
    return(
      <Text style={styles.completedText} >{'completed'}</Text>
    );
  }

  render() {
    return(
      <TouchableOpacity
        style={styles.radioButtonContainer}
        onPress={this.handleChange.bind(this)} >
        <Text style={styles.todoText} >{this.props.children}</Text>
        {this.props.complete && this.showCompletedText()}
      </TouchableOpacity>
    );
  }
}

export default RadioButton;