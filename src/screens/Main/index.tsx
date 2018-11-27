import * as React from 'react';
import { View } from 'react-native';
import styles from './styles';
import CreateForm from './CreateForm/index';
import List from './List/index';

class Main extends React.Component {
  render() {
    return(
      <View style={styles.container} >
        <CreateForm />
        <List />
      </View>
    );
  }
}

export default Main;