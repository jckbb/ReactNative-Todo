import { all, takeEvery, fork, put,  } from 'redux-saga/effects';
import { TodoActionTypes, Todo } from './types';
import { createSuccess, createRequest, fetchSuccess } from './actions';

function* createWorker(action: ReturnType<typeof createRequest>) {
  const todo: Todo = {
    id: '0',
    timestamp: Date.now(),
    title: action.payload,
    list: []
  };

  yield put(createSuccess(todo));
}

function* fetchWorker() {
  yield put(fetchSuccess([]));
}

function* createWatcher() {
  yield takeEvery(TodoActionTypes.CREATE_REQUEST, createWorker);
}

function* fetchWatcher() {
  yield takeEvery(TodoActionTypes.FETCH_REQUEST, fetchWorker);
}

export default function* todoSagas() {
  yield all([fork(createWatcher), fork(fetchWatcher)]);
}