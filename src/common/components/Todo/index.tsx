import React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from 'common/store';
import { selectTodoById } from 'common/data/todo/selectors';
import { Todo as TodoDataModel } from 'common/data/todo/types';
import { Dispatch } from 'redux';
import { updateRequest } from 'common/data/todo/actions';

interface PropsFromState {
  data: TodoDataModel
};

interface PropsFromDispatch {
  updateRequest: typeof updateRequest
};

interface InjectedProps {
  data: TodoDataModel,
  handleCompleteChange(): void
};

interface Props {
  id: string,
  children(props: InjectedProps): JSX.Element
}

type AllProps = Props & PropsFromDispatch & PropsFromState;

class Todo extends React.Component<AllProps> {
  updateComplete() {
    const { data } = this.props;
    const newData = {
      id: data.id,
      detail: data.detail,
      createdAt: data.createdAt,
      updatedAt: Date.now(),
      complete: !data.complete
    };

    this.props.updateRequest(newData);
  }

  render() {
    return this.props.children({
      data: this.props.data,
      handleCompleteChange: this.updateComplete.bind(this)
    });
  }
}

const makeMapStateToProps = () => {
  const getTodoById = selectTodoById();

  return (state: ApplicationState, props: Props) => {
    return {
      data: getTodoById(state, props)
    };
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateRequest: (data: TodoDataModel) => dispatch(updateRequest(data))
});

export default connect(makeMapStateToProps, mapDispatchToProps)(Todo);