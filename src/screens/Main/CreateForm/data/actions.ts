import { action } from 'typesafe-actions';
import { CreateActionTypes, Create } from './types';
// change create data
export const updateRequest = (text: string) => action(CreateActionTypes.UPDATE_REQUEST,text);
export const updateSuccess = (data: Create) => action(CreateActionTypes.UPDATE_SUCCESS, data);
export const updateError = (message: string) => action(CreateActionTypes.UPDATE_ERROR, message);
// reset create data
export const clearRequest = () => action(CreateActionTypes.CLEAR_REQUEST);
export const clearSuccess = (data: Create) => action(CreateActionTypes.CLEAR_SUCCESS, data);
export const clearError = (message: string) => action(CreateActionTypes.CLEAR_ERROR, message);