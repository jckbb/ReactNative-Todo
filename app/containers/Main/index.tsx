import * as React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Create from '../../components/Create/index';

type Props = {};
type State = {};

class Main extends React.Component<State, Props> {
  render() {
    return(
      <View style={styles.container} >
        <Create />
      </View>
    );
  }
}

export default Main;