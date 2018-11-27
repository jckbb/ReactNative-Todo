import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { makeGetTodoById } from 'common/data/todo/selectors';
import { ApplicationState } from 'common/store';
import { Todo } from 'common/data/todo/types';

type Props = {
  id: string
};
type PropsFromDisaptch = {};
type PropsFromState = {
  todo: Todo
};

type AllProps = Props & PropsFromState & PropsFromDisaptch;

class Item extends React.Component<AllProps> {
  render() {
    const { title } = this.props.todo;
    return(
      <View style={styles.container} >
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

const makeMapStateToProps = () => {
  const getTodoById = makeGetTodoById();

  return (state: ApplicationState, props: Props) => {
    return {
      todo: getTodoById(state, props)
    };
  }
}

export default connect(makeMapStateToProps)(Item);