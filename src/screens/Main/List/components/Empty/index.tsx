import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface Props {
  children: string
};

class Empty extends React.Component<Props> {
  render() {
    return(
      <View style={styles.emptyContainer} >
        <Text style={styles.message} >
          {this.props.children}
        </Text>
      </View>
    );
  }
}

export default Empty;