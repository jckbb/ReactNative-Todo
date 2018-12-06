import React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from 'common/store';
import { makeGetTodoById } from 'common/data/todo/selectors';
import { Todo as TodoDataModel } from 'common/data/todo/types';

interface InjectedProps {
  data: TodoDataModel
};

interface Props {
  id: string,
  children(props: InjectedProps): JSX.Element
}

interface PropsFromState {
  todo: TodoDataModel
};

type AllProps = Props & PropsFromState;

class Todo extends React.Component<AllProps> {
  render() {
    return this.props.children({
      data: this.props.todo
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


export default connect(makeMapStateToProps)(Todo);