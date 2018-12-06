import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Todo from 'common/components/Todo';

type Props = {
  id: string
};

class TodoItem extends React.Component<Props> {
  render() {
    return(
      <Todo id={this.props.id} >
        {(injectedProps) => 
          <View style={styles.container} >
            <Text >
              {injectedProps.data.title}
            </Text>
          </View>
        }
      </Todo>
    );
  }
}

export default TodoItem;