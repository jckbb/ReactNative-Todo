import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
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
      <TouchableWithoutFeedback
        onPress={this.handleChange.bind(this)} >
        <View style={styles.radioButtonContainer} >
          <Text 
            style={[styles.todoText, this.props.complete && styles.completedText]} >
            {this.props.children}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default RadioButton;