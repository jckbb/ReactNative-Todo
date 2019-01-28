import { action } from 'typesafe-actions';
import { TodoActionTypes, Todo } from './types';

export const fetchRequest = (id: string) => action(TodoActionTypes.FETCH_REQUEST, id);
export const fetchSuccess = (data: Todo) => action(TodoActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(TodoActionTypes.FETCH_ERROR, message);

export const fetchAllRequest = () => action(TodoActionTypes.FETCH_ALL_REQUEST);
export const fetchAllSuccess = () => action(TodoActionTypes.FETCH_ALL_SUCCESS);
export const fetchAllError = (message: string) => action(TodoActionTypes.FETCH_ALL_ERROR, message);
export const addTodo = (data: Todo) => action(TodoActionTypes.ADD_TODO,data);

export const createRequest = (data: Todo) => action(TodoActionTypes.CREATE_REQUEST, data);
export const createSuccess = (payload: Todo) => action(TodoActionTypes.CREATE_SUCCESS, payload);
export const createError = (message: string) => action(TodoActionTypes.CREATE_ERROR, message);

export const deleteRequest = (id: string) => action(TodoActionTypes.DELETE_REQUEST, id);
export const deleteSuccess = (id: string) => action(TodoActionTypes.DELETE_SUCCESS, id);
export const deleteErrror = (message: string) => action(TodoActionTypes.DELETE_ERROR, message);

export const deleteAllRequest = () => action(TodoActionTypes.DELETE_ALL_REQUEST);
export const deleteAllSuccess = () => action(TodoActionTypes.DELETE_ALL_SUCCESS);

export const updateRequest = (payload: Todo) => action(TodoActionTypes.UPDATE_REQUEST, payload);
export const updateSuccess = (payload: Todo) => action(TodoActionTypes.UPDATE_SUCCESS, payload);
export const updateError = (message: string) => action(TodoActionTypes.UPDATE_ERROR, message);