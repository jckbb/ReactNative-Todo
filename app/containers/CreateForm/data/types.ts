export interface Create extends ApiResponse {
    title: string,
}
  
export type ApiResponse = Record<string, any>;

export enum CreateActionTypes {
  UPDATE_REQUEST = '@@create/UPDATE_REQUEST',
  UPDATE_SUCCESS = '@@create/UPDATE_SUCCESS',
  UPDATE_ERROR = '@@create/UPDATE_ERROR',
  CLEAR_REQUEST = '@@create/CLEAR_REQUEST',
  CLEAR_SUCCESS = '@@create/CLEAR_SUCCESS',
  CLEAR_ERROR = '@@create/CLEAR_ERROR'
}

export interface CreateState {
  readonly loading: boolean,
  readonly error?: string,
  readonly data: Create
}