import { all, fork, takeLatest, put } from 'redux-saga/effects';
import { CreateActionTypes, Create } from './types';
import { updateRequest, updateSuccess, clearSuccess } from './actions';

function* updateWorker(action: ReturnType<typeof updateRequest>) {
  const data: Create = {
    title: action.payload
  };

  yield put(updateSuccess(data));
}

function* clearWorker() {
  const data: Create = {
    title: ''
  };

  yield put(clearSuccess(data));
}

function* updateWatcher() {
  yield takeLatest(CreateActionTypes.UPDATE_REQUEST, updateWorker);
}

function* clearWatcher() {
  yield takeLatest(CreateActionTypes.CLEAR_REQUEST, clearWorker);
}

export default function* createSagas() {
  yield all([
    fork(updateWatcher),
    fork(clearWatcher)
  ]);
}