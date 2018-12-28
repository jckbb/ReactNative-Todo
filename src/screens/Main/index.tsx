import * as React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Form from './Form';
import List from './List/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createRequest } from 'common/data/todo/actions';
import { reset } from 'redux-form';

interface PropsFromDispatch {
  createTodo: typeof createRequest,
  resetForm: typeof reset
};

type AllProps = PropsFromDispatch;

class Main extends React.Component<AllProps> {
  handleFormSubmit(values: any) {
    this.props.createTodo(values.todoTask);
    this.props.resetForm('todoForm');
  }

  render() {
    return(
      <View style={styles.container} >
        <Form 
          onSubmit={this.handleFormSubmit.bind(this)}
        />
        <List />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createTodo: (detail: string) => dispatch(createRequest(detail)),
  resetForm: (formName: string) => dispatch(reset(formName))
});

export default connect(null, mapDispatchToProps)(Main);