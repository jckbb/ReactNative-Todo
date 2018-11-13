import { action } from 'typesafe-actions';
import { TodoActionTypes, Todo } from './types';

export const fetchRequest = () => action(TodoActionTypes.FETCH_REQUEST);
export const fetchSuccess = () => action(TodoActionTypes.FETCH_SUCCESS);
export const fetchError = (message: string) => action(TodoActionTypes.FETCH_ERROR, message);

export const createRequest = (title: string) => action(TodoActionTypes.CREATE_REQUEST, title);
export const createSuccess = (data: Todo) => action(TodoActionTypes.CREATE_SUCCESS, data);
export const createError = (message: string) => action(TodoActionTypes.CREATE_ERROR, message);