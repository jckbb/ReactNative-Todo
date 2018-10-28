import * as React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Create from '../../containers/Create/index';

type Props = {};
type State = {};

type AllProps = Props;

class Main extends React.Component<AllProps, State> {
  render() {

    return(
      <View style={styles.container} >
        <Create />
      </View>
    );
  }
}

export default Main;