import { combineReducers } from 'redux';
import { todoReducer } from '../data/todo/reducer';
import { ApplicationState } from '.';

export default combineReducers<ApplicationState>({
  todo: todoReducer,
});