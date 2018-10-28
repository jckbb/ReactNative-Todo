import { all, takeEvery, fork, put,  } from 'redux-saga/effects';
import { TodoActionTypes, Todo } from './types';
import { createSuccess, createRequest } from './actions';

function* createWorker(action: ReturnType<typeof createRequest>) {
  const todo: Todo = {
    id: '0',
    timestamp: Date.now(),
    title: action.payload,
    list: []
  };

  yield put(createSuccess(todo));
}

function* todoWatcher() {
  yield takeEvery(TodoActionTypes.CREATE_REQUEST, createWorker);
}

export default function* todoSagas() {
  yield all([fork(todoWatcher)]);
}