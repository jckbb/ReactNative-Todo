import React from 'react';
import { View, Text } from 'react-native';
import { Todo } from '../../../../data/todo/types';
import styles from './styles';

type State = {};
type Props = {
  data: Todo
};

class Item extends React.Component<Props, State> {
  render() {
    const { title } = this.props.data;
    return(
      <View style={styles.container} >
        <Text style={styles.title} >{title}</Text>
      </View>
    );
  }
}

export default Item;