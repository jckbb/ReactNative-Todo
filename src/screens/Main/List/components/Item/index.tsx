import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
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
        {(injectedProp) => (
          <TouchableWithoutFeedback onPress={injectedProp.handleCompleteChange} >
            <View style={styles.container}>
              <RadioButton 
                complete={injectedProp.data.complete}
                detail={injectedProp.data.detail} />
            </View>
          </TouchableWithoutFeedback>
        )}
      </Todo>
    );
  }
}

export default TodoItem;