import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createFormStrings as string } from 'res/strings';
import styles from './styles';

interface Props {
  onSubmit(): void
};

class Submit extends React.Component<Props> {
  handleSubmit() {
    this.props.onSubmit();
  }
  
  render() {
    return(
      <TouchableOpacity
        style={styles.button}
        onPress={this.handleSubmit.bind(this)} >
        <Text style={styles.text} >
          {string.createButtonText}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Submit;