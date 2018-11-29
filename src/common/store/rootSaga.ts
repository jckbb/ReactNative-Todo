import { all, fork } from 'redux-saga/effects';
import todoSagas from '../data/todo/sagas';

export function* rootSaga() {
  yield all([
    fork(todoSagas),
  ]);
}