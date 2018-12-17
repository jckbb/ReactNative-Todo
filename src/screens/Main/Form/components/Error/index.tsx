import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

interface Props {
  children: string
}

class Error extends React.Component<Props> {
  render() {
    return(
      <Text style={styles.text} >{this.props.children}</Text>
    );
  }
}

export default Error;