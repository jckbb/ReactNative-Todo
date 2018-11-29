import React from 'react';
import { View } from 'react-native';
import TextBox from 'common/components/TextBox';
import Button from 'common/components/Button';
import { createFormStrings as string } from 'res/strings';
import styles from './styles';

interface State {
  value: string
};

interface Props {
  create(value: string): void
};

class CreateForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  changeValue(text: string) {
    this.setState({value: text});
  }

  submit() {
    this.props.create(this.state.value);
    this.clear();
  }

  clear() {
    this.setState({value: ''});
  }

  render() {
    return(
      <View style={styles.formContainer} >
        <TextBox
          styling={styles.textBox}
          placeholder={string.createTextBoxPlaceholderText}
          value={this.state.value}
          handleTextChange={this.changeValue.bind(this)} />
        <Button
          styling={styles.submitButton}
          onPress={this.submit.bind(this)} >
          {string.createButtonText}
        </Button>
      </View>
    );
  }
}

export default CreateForm;