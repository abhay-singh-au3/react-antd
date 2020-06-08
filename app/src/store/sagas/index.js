import { put, takeLatest, all, call } from 'redux-saga/effects';

import { apiCall } from '../../utils/api';

function* fetchData(action) {
  const data = yield call(apiCall, action.query);
  if (data.length !== 0) {
    yield put({ type: 'DATA_LOADED', data: data });
  } else {
    yield put({ type: 'DATA_ERROR', error: 'Nothing found!' });
  }
}

function* actionWatcher() {
  yield takeLatest('GET_DATA', fetchData);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
