import React from 'react';
import { View, Text } from 'react-native';
import Checkbox from './components/CheckBox';
import styles from './styles';

interface Props {
  complete: boolean,
  detail: string
}

class RadioButton extends React.Component<Props> {
  render() {
    return(
      <View style={styles.container} >
        <Checkbox complete={this.props.complete} />
        <Text style={styles.text} >{this.props.detail}</Text>
      </View>
    );
  }
}

export default RadioButton;