import { all, fork } from 'redux-saga/effects';
import todoSagas from '../data/todo/sagas';
import createSagas from '../../screens/Main/CreateForm/data/sagas';

export function* rootSaga() {
  yield all([
    fork(todoSagas),
    fork(createSagas)
  ]);
}