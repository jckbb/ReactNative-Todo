export interface Todo extends ApiResponse {
  id: string,
  createdAt: number,
  updatedAt: number,
  detail: string,
  complete: boolean
}

export type ApiResponse = Record<string, any>;

export enum TodoActionTypes {
  FETCH_REQUEST = '@@todo/FETCH_REQUEST',
  FETCH_SUCCESS = '@@todo/FETCH_SUCCESS',
  FETCH_ERROR = '@@todo/FETCH_ERROR',

  FETCH_ALL_REQUEST = '@@todo/FETCH_ALL_REQUEST',
  FETCH_ALL_SUCCESS = '@@todo/FETCH_ALL_SUCCESS',
  FETCH_ALL_ERROR = '@@todo/FETCH_ALL_ERROR',

  CREATE_REQUEST = '@@todo/CREATE_REQUEST',
  CREATE_SUCCESS = '@@todo/CREATE_SUCCESS',
  CREATE_ERROR = '@@todo/CREATE_ERROR',
  
  UPDATE_REQUEST = '@@todo/UPDATE_REQUEST',
  UPDATE_SUCCESS = '@@todo/UPDATE_SUCCESS',
  UPDATE_ERROR = '@@todo/UPDATE_ERROR',

  DELETE_REQUEST = '@@todo/DELETE_REQUEST',
  DELETE_SUCCESS = '@@todo/DELETE_SUCCESS',
  DELETE_ERROR = '@@todo/DELETE_ERROR',

  DELETE_ALL_REQUEST = '@@todo/DELETE_REQUEST',
  DELETE_ALL_SUCCESS = '@@todo/DELETE_SUCCESS',
  DELETE_ALL_ERROR = '@@todo/DELETE_ERROR'
}

export interface TodoState {
  readonly loading: boolean,
  readonly error?: string,
  readonly byId: {[id: string]: Todo},
  readonly allIds: string[]
}