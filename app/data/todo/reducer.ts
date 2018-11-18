import { Reducer } from 'redux';
import { TodoState, TodoActionTypes } from './types';

const initialState: TodoState = {
  loading: false,
  error: undefined,
  byId: {},
  allIds: []
}

const reducer: Reducer<TodoState> = (state = initialState, action) => {
  switch(action.type) {
    case TodoActionTypes.CREATE_REQUEST:
    case TodoActionTypes.FETCH_ALL_REQUEST:
    case TodoActionTypes.DELETE_REQUEST:
    case TodoActionTypes.UPDATE_REQUEST:
    case TodoActionTypes.FETCH_REQUEST:
      return {...state, loading: true};
    case TodoActionTypes.CREATE_SUCCESS:
    case TodoActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        allIds: [...state.allIds, action.payload.id],
        byId: {...state.byId, [action.payload.id]: action.payload}
      };
    case TodoActionTypes.DELETE_SUCCESS:
      const {[action.payload]: {}, ...byIdData} = state.byId;
      return {
        ...state,
        loading:false,
        allIds: [
          ...state.allIds.slice(0, state.allIds.indexOf(action.payload)),
          ...state.allIds.slice(state.allIds.indexOf(action.payload) + 1)
        ],
        byId: byIdData
      };
      case TodoActionTypes.UPDATE_SUCCESS:
        const {[action.payload]: {}, ...byIdRemaining} = state.byId;
        return {
          ...state,
          loading: false,
          byId: {...byIdRemaining, [action.payload.id]: action.payload}
        }
    default:
      return state;
  }
}

export { reducer as todoReducer };