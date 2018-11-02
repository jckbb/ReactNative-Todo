import { Reducer } from 'redux';
import { CreateState, CreateActionTypes } from './types';

const initialState: CreateState = {
  loading: false,
  error: undefined,
  data: {
    title: ''
  },
}

const reducer: Reducer<CreateState> = (state = initialState, action) => {
  switch(action.type) {
    case CreateActionTypes.UPDATE_REQUEST:
    case CreateActionTypes.CLEAR_REQUEST:
      return {...state, loading: true}
    case CreateActionTypes.UPDATE_SUCCESS:
    case CreateActionTypes.CLEAR_SUCCESS:
      return {...state, loading: false, data: action.payload}
    case CreateActionTypes.UPDATE_ERROR:
    case CreateActionTypes.CLEAR_ERROR:
      return {...state, loading: false, error: action.payload}
    default:
      return state;
  }
}

export { reducer as createReducer };