import { all, takeEvery, fork, put } from 'redux-saga/effects';
import { TodoActionTypes, Todo } from './types';
import { 
  updateRequest, 
  updateSuccess, 
  createSuccess, 
  deleteRequest, 
  createRequest, 
  fetchSuccess, 
  deleteSuccess 
} from './actions';
import Storage from '../../storage/index';
import { generateUUID } from '../../utils/uuid';

function* createWorker({ payload }: ReturnType<typeof createRequest>) {
  const currentTime = Date.now();
  const todo: Todo = {
    id: generateUUID(),
    createdAt: currentTime,
    updatedAt: currentTime,
    title: payload,
    complete: false
  };

  yield Storage.setItem(todo);
  yield put(createSuccess(todo));
}

function* fetchAllWorker() {
  const results = yield Storage.getAllItems();
  
  for(var result of results) {
    yield put(fetchSuccess(result));
  }
}

function* deleteWorker({ payload }: ReturnType<typeof deleteRequest>) {
  yield Storage.deleteItem(payload);
  yield put(deleteSuccess(payload));
}

function* updateWorker({ payload }: ReturnType<typeof updateRequest>) {
  yield Storage.setItem(payload);
  yield put(updateSuccess(payload));
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

function* fetchAllWatcher() {
  yield takeEvery(TodoActionTypes.FETCH_ALL_REQUEST, fetchAllWorker);
}

export default function* todoSagas() {
  yield all([
    fork(createWatcher),
    fork(fetchWatcher),
    fork(fetchAllWatcher),
    fork(deleteWatcher),
    fork(updateWatcher)
  ]);
}