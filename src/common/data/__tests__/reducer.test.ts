import { todoReducer } from 'common/data/todo/reducer';
import { TodoState, Todo, TodoActionTypes } from 'common/data/todo/types';

describe('todo reducers', () => {
  const initialState: TodoState = {
    loading: false,
    error: undefined,
    byId: {},
    allIds: []
  };
  const loadingState: TodoState = {
    loading: true,
    error: undefined,
    byId: {},
    allIds: []
  }
  const todo: Todo = {
    id: 'test_id',
    createdAt: 0,
    updatedAt: 0,
    detail: 'test',
    complete: false
  };

  it('should return initial state', () => {
    expect(todoReducer(undefined, <any>{}))
      .toEqual(initialState);
  });

  it('should request created todo record', () => {
    const loading = true;
    const expectedAction = {
      type: TodoActionTypes.CREATE_REQUEST,
      payload: loading
    };

    expect(todoReducer(initialState, expectedAction))
      .toEqual(loadingState);
  });

  it('should return created todo record', () => {
    const expectedState: TodoState = {
      loading: false,
      error: undefined,
      byId: {[todo.id]: todo},
      allIds: [todo.id]
    };
    const expectedAction = {
      type: TodoActionTypes.CREATE_SUCCESS,
      payload: todo
    };

    expect(todoReducer(loadingState, expectedAction))
      .toEqual(expectedState);
  });

  it('should request to remove all todo records', () => {
    const loading = true;
    const expectedAction = {
      type: TodoActionTypes.DELETE_ALL_REQUEST,
      payload: loading
    };
    const currentState: TodoState = {
      loading: false,
      error: undefined,
      byId: {[todo.id]: todo},
      allIds: [todo.id]
    };
    const state = {
      loading: true,
      error: undefined,
      byId: {[todo.id]: todo},
      allIds: [todo.id]
    };

    expect(todoReducer(currentState, expectedAction))
      .toEqual(state);
  });

  it('should remove all todo records', () => {
    const todo: Todo = {
      id: 'test_id',
      createdAt: 0,
      updatedAt: 0,
      detail: 'test',
      complete: false
    };
    const state: TodoState = {
      loading: true,
      error: undefined,
      byId: {[todo.id]: todo},
      allIds: [todo.id]
    };
    const expectedAction = {
      type: TodoActionTypes.DELETE_ALL_SUCCESS,
      payload: undefined
    };

    expect(todoReducer(state, expectedAction))
      .toEqual(initialState);
  });

  it('should request fetched all todo records', () => {
    const expectedAction = {
      type: TodoActionTypes.FETCH_ALL_REQUEST,
      payload: undefined
    };

    expect(todoReducer(initialState, expectedAction))
      .toEqual(loadingState);
  });

  it('should return a fetched todo record', () => {
    const expectedAction = {
      type: TodoActionTypes.ADD_TODO,
      payload: todo
    };
    const state: TodoState = {
      loading: true,
      error: undefined,
      byId: {[todo.id]: todo},
      allIds: [todo.id]
    };

    expect(todoReducer(loadingState, expectedAction))
      .toEqual(state);
  });

  it('should return fetched all todo records', () => {
    const currentState: TodoState = {
      loading: true,
      error: undefined,
      byId: {[todo.id]: todo},
      allIds: [todo.id]
    };
    const newState: TodoState = {
      loading: false,
      error: undefined,
      byId: {[todo.id]: todo},
      allIds: [todo.id]
    };
    const expectedAction = {
      type: TodoActionTypes.FETCH_ALL_SUCCESS,
      payload: undefined
    }

    expect(todoReducer(currentState, expectedAction))
      .toEqual(newState);
  });

  it('should request update todo record', () => {
    const currentState: TodoState = {
      loading: false,
      error: undefined,
      byId: {[todo.id]: todo},
      allIds: [todo.id]
    };
    const expectedAction = {
      type: TodoActionTypes.UPDATE_REQUEST,
      payload: undefined
    };
    const newState: TodoState = {
      loading: true,
      error: undefined,
      byId: {[todo.id]: todo},
      allIds: [todo.id]
    };

    expect(todoReducer(currentState, expectedAction))
      .toEqual(newState);
  });

  it('should return updated todo record', () => {
    const updatedTodo: Todo = {
      id: 'test_id',
      createdAt: 0,
      updatedAt: 0,
      detail: 'test',
      complete: true
    };
    const currentState: TodoState = {
      loading: false,
      error: undefined,
      byId: {[todo.id]: todo},
      allIds: [todo.id]
    };
    const expectedAction = {
      type: TodoActionTypes.UPDATE_SUCCESS,
      payload: updatedTodo
    }
    const newState: TodoState = {
      loading: false,
      error: undefined,
      byId: {[updatedTodo.id]: updatedTodo},
      allIds: [updatedTodo.id]
    };

    expect(todoReducer(currentState, expectedAction))
      .toEqual(newState);
  });
});