import * as React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

const defaultProps = {
  placeholder: 'title',
};

type DefaultProps = typeof defaultProps;
type Props = {
  readonly handleTextChange: (text: string) => void,
  readonly value: string
} & DefaultProps;

class TextBox extends React.Component<Props> {
  handleChange(text: string) {
    this.props.handleTextChange(text);
  }

  render() {
    const { placeholder, value } = this.props;

    return(
      <View style={styles.container} >
        <TextInput
          style={styles.textBox}
          value={value}
          placeholder={placeholder}
          onChangeText={this.handleChange.bind(this)} />
      </View>
    );
  }
}

export default TextBox;