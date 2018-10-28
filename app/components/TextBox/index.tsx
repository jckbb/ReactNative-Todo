import * as React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

const defaultProps = {
  placeholder: 'title'
};

type DefaultProps = typeof defaultProps;
type Props = {
  readonly onChangeText: (text: string) => void
} & DefaultProps;

class TextBox extends React.Component<Props> {
  render() {
    const { placeholder, onChangeText } = this.props;

    return(
      <View style={styles.container} >
        <TextInput
          style={styles.textBox}
          placeholder={placeholder}
          onChangeText={onChangeText} />
      </View>
    );
  }
}

export default TextBox;