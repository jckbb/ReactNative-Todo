import { combineReducers } from 'redux';
import { todoReducer } from '../data/todo/reducer';
import { ApplicationState } from '.';
import { reducer as formReducer } from 'redux-form';

export default combineReducers<ApplicationState>({
  todo: todoReducer,
  form: formReducer
});