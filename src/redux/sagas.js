import {put, takeEvery, call} from "redux-saga/effects";
import {FETCHED_POST, REQUEST_POST} from "./types";
import {hideLoader, showAlert, showLoader} from "./actions";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POST, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({type: FETCHED_POST, payload});
    yield put(hideLoader());
  } catch (e) {
    yield put(showAlert('Oops... Something went wrong :('));
    yield put(hideLoader());
  }
}

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=8');
  return await response.json();
}
