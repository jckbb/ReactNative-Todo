import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Todo from 'common/components/Todo';
import RadioButton from 'common/components/RadioButton';

interface Props {
  id: string
};

class TodoItem extends React.Component<Props> {
  render() {
    return(
      <Todo id={this.props.id} >
        {(injectedProp) => 
          <View style={styles.container} >
            <RadioButton
              complete={injectedProp.data.complete}
              handleCompleteChange={injectedProp.handleCompleteChange}
            >
              {injectedProp.data.title}
            </RadioButton>
          </View>
        }
      </Todo>
    );
  }
}

export default TodoItem;