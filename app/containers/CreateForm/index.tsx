import * as React from 'react';
import { View } from 'react-native';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Button from '../../components/Button/index';
import TextBox from '../../components/TextBox/index';
import * as string from '../../constant/strings';
import styles from './styles';
import { ApplicationState } from '../../store';
import { updateRequest, clearRequest } from './data/actions';
import { CreateState } from './data/types'; 
import { createRequest } from '../../data/todo/actions';
import { TodoState } from '../../data/todo/types';

interface PropsFromState {
  create: CreateState,
  todo: TodoState
};

interface PropsFromDispatch {
  updateRequest: typeof updateRequest,
  clearRequest: typeof clearRequest,
  createRequest: typeof createRequest
};

type AllProps = PropsFromDispatch & PropsFromState;

class CreateForm extends React.Component<AllProps> {
  handleChange(text: string) {
    this.props.updateRequest(text);
  }

  submit() {
    this.props.createRequest(this.props.create.data.title);
  }

  render() {
    const { title } = this.props.create.data;

    return(
      <View style={styles.container} >
        <TextBox
          placeholder={string.createTodoPlaceholder}
          value={title}
          handleTextChange={this.handleChange.bind(this)} />
        <Button onPress={this.submit.bind(this)}>{string.addTodoButtonText}</Button>
      </View>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  create: state.create,
  todo: state.todo
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateRequest: (title: string) => dispatch(updateRequest(title)),
  clearRequest: () => dispatch(clearRequest()),
  createRequest: (title: string) => dispatch(createRequest(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);