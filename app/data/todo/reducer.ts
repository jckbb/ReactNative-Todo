import { Reducer } from 'redux';
import { TodoState, TodoActionTypes } from './types';

const initialState: TodoState = {
  loading: false,
  error: undefined,
  data: [],
}

const reducer: Reducer<TodoState> = (state = initialState, action) => {
  switch(action.type) {
    case TodoActionTypes.CREATE_REQUEST:
      return {...state, loading: true}
    case TodoActionTypes.CREATE_SUCCESS:
      return {...state, loading: false, data: [...state.data, action.payload]}
    case TodoActionTypes.CREATE_ERROR:
      return {...state, loading: false, error: action.payload}
    default: 
      return state;
  }
}

export { reducer as todoReducer };