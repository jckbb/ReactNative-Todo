import { TodoState } from '../data/todo/types';
import { FormStateMap } from 'redux-form';

export interface ApplicationState {
  todo: TodoState,
  form: FormStateMap
};