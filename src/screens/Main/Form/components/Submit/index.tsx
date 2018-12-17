import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createFormStrings as string } from 'res/strings';

interface Props {
  onSubmit(): void
};

class Submit extends React.Component<Props> {
  handleSubmit() {
    this.props.onSubmit();
  }
  
  render() {
    return(
      <TouchableOpacity onPress={this.handleSubmit.bind(this)} >
        <Text >
          {string.createButtonText}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Submit;