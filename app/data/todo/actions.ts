import { action } from 'typesafe-actions';
import { TodoActionTypes, Todo } from './types';

export const fetchRequest = (id: string) => action(TodoActionTypes.FETCH_REQUEST, id);
export const fetchSuccess = (data: Todo) => action(TodoActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(TodoActionTypes.FETCH_ERROR, message);

export const fetchAllRequest = () => action(TodoActionTypes.FETCH_ALL_REQUEST);
export const fetchAllSuccess = (data: Todo) => action(TodoActionTypes.FETCH_ALL_SUCCESS, data);
export const fetchAllError = (message: string) => action(TodoActionTypes.FETCH_ALL_ERROR, message);

export const createRequest = (title: string) => action(TodoActionTypes.CREATE_REQUEST, title);
export const createSuccess = (data: Todo) => action(TodoActionTypes.CREATE_SUCCESS, data);
export const createError = (message: string) => action(TodoActionTypes.CREATE_ERROR, message);

export const deleteRequest = (id: string) => action(TodoActionTypes.DELETE_REQUEST, id);
export const deleteSuccess = (id: string) => action(TodoActionTypes.DELETE_SUCCESS, id);
export const deleteErrror = (message: string) => action(TodoActionTypes.DELETE_ERROR, message);

export const updateRequest = (data: Todo) => action(TodoActionTypes.UPDATE_REQUEST, data);
export const updateSuccess = (data: Todo) => action(TodoActionTypes.UPDATE_SUCCESS, data);
export const updateError = (message: string) => action(TodoActionTypes.UPDATE_ERROR, message);