import * as React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Create from '../../containers/Create/index';
import List from '../../containers/List/index';

type Props = {};
type State = {};

type AllProps = Props;

class Main extends React.Component<AllProps, State> {
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