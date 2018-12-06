import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchAllRequest } from 'common/data/todo/actions';
import { ApplicationState } from 'common/store';

interface PropsFromDispatch {
  fetchAllTodos: typeof fetchAllRequest
};

interface PropsFromState {
  allIds: string[],
  loading: boolean
};

interface InjectedProps {
  data: string[],
  loading: boolean
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
      data: this.props.allIds,
      loading: this.props.loading
    });
  }
}

const mapStateToProps = ({ todo }: ApplicationState) => ({
  allIds: todo.allIds,
  loading: todo.loading
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchAllTodos: () => dispatch(fetchAllRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoCollection);