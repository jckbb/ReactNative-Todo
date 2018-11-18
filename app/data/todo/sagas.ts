import { all, takeEvery, fork, put } from 'redux-saga/effects';
import { TodoActionTypes, Todo } from './types';
import { updateRequest, updateSuccess, createSuccess, deleteRequest, createRequest, fetchSuccess, deleteSuccess } from './actions';
import Storage from '../../storage/index';
import { generateUUID } from '../../utils/uuid';

function* createWorker(action: ReturnType<typeof createRequest>) {
  const currentTime = Date.now();
  const todo: Todo = {
    id: generateUUID(),
    createdAt: currentTime,
    updatedAt: currentTime,
    title: action.payload,
    allTaskIds: []
  };

  const result = yield Storage.getItem(todo.id);
  
  yield put(createSuccess(result));
}

function* fetchAllWorker() {
  const results = yield Storage.getAllItems();

  for(var result of results) {
    yield put(fetchSuccess(result));
  }
}

function* deleteWorker(action: ReturnType<typeof deleteRequest>) {
  const result = yield Storage.deleteItem(action.payload);

  yield put(deleteSuccess(result));
}

function* updateWorker(action: ReturnType<typeof updateRequest>) {
  const result = yield Storage.setItem(action.payload);

  yield put(updateSuccess(result));
}

function* createWatcher() {
  yield takeEvery(TodoActionTypes.CREATE_REQUEST, createWorker);
}

function* fetchWatcher() {
  yield takeEvery(TodoActionTypes.FETCH_REQUEST, fetchAllWorker);
}

function* deleteWatcher() {
  yield takeEvery(TodoActionTypes.DELETE_REQUEST, deleteWorker);
}

function* updateWatcher() {
  yield takeEvery(TodoActionTypes.UPDATE_REQUEST, updateWorker);
}

export default function* todoSagas() {
  yield all([
    fork(createWatcher),
    fork(fetchWatcher),
    fork(deleteWatcher),
    fork(updateWatcher)
  ]);
}