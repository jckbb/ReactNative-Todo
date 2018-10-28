export interface Todo extends ApiResponse {
  id: string,
  timestamp: number,
  title: string,
  list: string[]
}

export type ApiResponse = Record<string, any>;

export enum TodoActionTypes {
  FETCH_REQUEST = '@@todo/FETCH_REQUEST',
  FETCH_SUCCESS = '@@todo/FETCH_SUCCESS',
  FETCH_ERROR = '@@todo/FETCH_ERROR',
  CREATE_REQUEST = '@@todo/CREATE_REQUEST',
  CREATE_SUCCESS = '@@todo/CREATE_SUCCESS',
  CREATE_ERROR = '@@todo/CREATE_ERROR',
  UPDATE_REQUEST = '@@todo/UPDATE_REUQEST'
}

export interface TodoState {
  readonly loading: boolean,
  readonly error?: string,
  readonly data: Todo[]
}