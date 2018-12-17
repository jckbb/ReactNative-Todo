import * as React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Form from './Form';
import List from './List/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createRequest } from 'common/data/todo/actions';

interface PropsFromDispatch {
  createTodo: typeof createRequest
};

class Main extends React.Component<PropsFromDispatch> {
  render() {
    return(
      <View style={styles.container} >
        <Form 
          onSubmit={(values: any) => {
            this.props.createTodo(values.todoTask);
          }}
        />
        <List />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createTodo: (task: string) => dispatch(createRequest(task))
});

export default connect(null, mapDispatchToProps)(Main);