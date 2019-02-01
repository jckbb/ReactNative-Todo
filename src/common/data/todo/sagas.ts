import { all, takeEvery, fork, put } from 'redux-saga/effects';
import { TodoActionTypes, Todo } from './types';
import * as TodoActions from './actions';
import Storage from '../../storage/index';
import { generateUUID } from 'common/utils/uuid';

function createTodoRecord(detail: string): Todo {
  const currentTime = Date.now();
  return {
    id: generateUUID(),
    createdAt: currentTime,
    updatedAt: currentTime,
    detail: detail,
    complete: false
  }
}

function* createWorker({ payload }: ReturnType<typeof TodoActions.createRequest>) { 
  const newData = createTodoRecord(payload.detail);
  
  yield Storage.setItem(newData);
  yield put(TodoActions.createSuccess(newData));
}

function* fetchAllWorker({}: ReturnType<typeof TodoActions.fetchAllRequest>) {
  try {
    var results = yield Storage.getAllItems();
  } catch(error) {
    yield put(TodoActions.fetchAllError(error));
  }

  if(results)
    for(var result of results) {
      yield put(TodoActions.addTodo(result));
    }

  yield put(TodoActions.fetchAllSuccess());
}

function* deleteWorker({ payload }: ReturnType<typeof TodoActions.deleteRequest>) {
  yield Storage.deleteAllItems();
  yield put(TodoActions.deleteAllSuccess());
}

function* updateWorker({ payload }: ReturnType<typeof TodoActions.updateRequest>) {
  yield Storage.setItem(payload);
  yield put(TodoActions.updateSuccess(payload));
}

function* createWatcher() {
  yield takeEvery(TodoActionTypes.CREATE_REQUEST, createWorker);
}

function* deleteWatcher() {
  yield takeEvery(TodoActionTypes.DELETE_ALL_REQUEST, deleteWorker);
}

function* updateWatcher() {
  yield takeEvery(TodoActionTypes.UPDATE_REQUEST, updateWorker);
}

function* fetchAllWatcher() {
  yield takeEvery(TodoActionTypes.FETCH_ALL_REQUEST, fetchAllWorker);
}

export default function* todoSagas() {
  yield all([
    fork(createWatcher),
    fork(fetchAllWatcher),
    fork(deleteWatcher),
    fork(updateWatcher)
  ]);
}