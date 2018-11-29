import * as React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Create from './Create';
import List from './List/index';

class Main extends React.Component {
  render() {
    return(
      <View style={styles.container} >
        <Create />
        <List />
      </View>
    );
  }
}

export default Main;