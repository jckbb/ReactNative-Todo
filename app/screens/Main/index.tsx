import * as React from 'react';
import { View } from 'react-native';
import styles from './styles';
import CreateForm from '../../containers/CreateForm/index';
import List from '../../containers/List/index';

type Props = {};
type State = {};

type AllProps = Props;

class Main extends React.Component<AllProps, State> {
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