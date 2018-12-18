import { TodoState } from '../data/todo/types';
import { Dispatch, Action, AnyAction } from 'redux';
import { FormStateMap } from 'redux-form';

export interface ApplicationState {
  todo: TodoState,
  form: FormStateMap
};

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}