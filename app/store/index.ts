import { TodoState } from '../data/todo/types';
import { CreateState } from '../containers/CreateForm/data/types';
import { Dispatch, Action, AnyAction } from 'redux';

export interface ApplicationState {
  todo: TodoState,
  create: CreateState
};

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}