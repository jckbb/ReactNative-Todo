import * as React from 'react';
import { View, TextInput, RegisteredStyle, ViewStyle } from 'react-native';
import styles from './styles';

const defaultProps = {
  placeholder: 'title',
};

type DefaultProps = typeof defaultProps;
type Props = {
  readonly handleTextChange: (text: string) => void,
  readonly value: string
  readonly styling: RegisteredStyle<ViewStyle>
} & DefaultProps;

class TextBox extends React.Component<Props> {
  handleChange(text: string) {
    this.props.handleTextChange(text);
  }

  render() {
    const { placeholder, value, styling } = this.props;

    return(
      <View style={[styles.container, styling]} >
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