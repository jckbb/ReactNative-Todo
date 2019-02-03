import * as React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Form from './Form';
import List from './List/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createRequest, deleteAllRequest } from 'common/data/todo/actions';
import { reset } from 'redux-form';
import ClearButton from 'common/components/ClearButton';

interface PropsFromDispatch {
  createTodo: typeof createRequest,
  clearAllTodos: typeof deleteAllRequest
  resetForm: typeof reset
};

type AllProps = PropsFromDispatch;

class Main extends React.Component<AllProps> {
  handleFormSubmit(values: any) {
    this.props.createTodo(values);
    this.props.resetForm('todoForm');
  }

  render() {
    return(
      <View style={styles.container} >
        <Form 
          onSubmit={this.handleFormSubmit.bind(this)}
        />
        <View style={styles.clearButtonContainer} >
          <ClearButton handlePress={this.props.clearAllTodos} />
        </View>
        <List />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createTodo: (data: {detail: string}) => dispatch(createRequest(data)),
  resetForm: (formName: string) => dispatch(reset(formName)),
  clearAllTodos: () => dispatch(deleteAllRequest())
});

export default connect(null, mapDispatchToProps)(Main);