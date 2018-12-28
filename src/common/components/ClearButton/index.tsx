import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { clearText } from 'res/strings';
import styles from './styles';

interface Props {
  handlePress(): void
};

class ClearButton extends React.Component<Props> {
  render() {
    return(
      <TouchableOpacity 
        style={[styles.clearContainer, ]}
        onPress={this.props.handlePress} >
        <Text style={styles.clearText} >
          {clearText}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default ClearButton;