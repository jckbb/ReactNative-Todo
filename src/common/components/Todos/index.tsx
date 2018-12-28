import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchAllRequest } from 'common/data/todo/actions';
import { ApplicationState } from 'common/store';
import { selectTodoIdsByTaskOrder } from 'common/data/todo/selectors';

interface PropsFromDispatch {
  fetchAllTodos: typeof fetchAllRequest
};

interface PropsFromState {
  ids: string[]
};

interface InjectedProps {
  data: string[],
  count: number
};

interface Props {
  children(props: InjectedProps): JSX.Element
};

type AllProps = Props & PropsFromDispatch & PropsFromState;

class TodoCollection extends React.Component<AllProps> {
  componentDidMount() {
    this.props.fetchAllTodos();
  }

  render() {
    return this.props.children({
      data: this.props.ids,
      count: this.props.ids.length
    });
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  ids:  selectTodoIdsByTaskOrder(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchAllTodos: () => dispatch(fetchAllRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoCollection);