import React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from 'common/store';
import { makeGetTodoById } from 'common/data/todo/selectors';
import { Todo as TodoDataModel } from 'common/data/todo/types';
import { Dispatch } from 'redux';
import { updateRequest } from 'common/data/todo/actions';

interface InjectedProps {
  data: TodoDataModel,
  handleCompleteChange(): void
};

interface Props {
  id: string,
  children(props: InjectedProps): JSX.Element
}

interface PropsFromDispatch {
  updateRequest: typeof updateRequest
};

interface PropsFromState {
  todo: TodoDataModel
};

type AllProps = Props & PropsFromState & PropsFromDispatch;

class Todo extends React.Component<AllProps> {
  updateComplete() {
    this.props.updateRequest(this.props.todo);
  }

  render() {
    return this.props.children({
      data: this.props.todo,
      handleCompleteChange: this.updateComplete.bind(this)
    });
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateRequest: (todo: TodoDataModel) => dispatch(updateRequest(todo))
});

export default connect(makeMapStateToProps, mapDispatchToProps)(Todo);