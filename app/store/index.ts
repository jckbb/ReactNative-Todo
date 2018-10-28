import { TodoState } from "../data/todo/types";
import { Dispatch, Action, AnyAction } from 'redux';

export interface ApplicationState {
  todo: TodoState
};

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}