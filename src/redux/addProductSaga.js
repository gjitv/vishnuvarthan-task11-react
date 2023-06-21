// sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { postItemSuccess, postItemFailure } from './actions';
import axios from "axios"
import { ADD_PRODUCT, POST_ITEM } from './constant';

// API function to perform the actual post request
const postItemApi = (data) => {
  yield fetch("http://localhost:8000/products",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(data)
  })
  console.warn("action called", data);
  yield post({type: ADD_PRODUCT, data})
};

// Worker Saga responsible for performing the post action
function* postItemSaga(action) {
  try {
    const response = yield call(postItemApi, action.payload);
    yield put(postItemSuccess(response.data)); // Dispatch success action
  } catch (error) {
    yield put(postItemFailure(error)); // Dispatch failure action
  }
}

// Watcher Saga that listens for the POST_ITEM action
function* watchPostItem() {
  yield takeLatest(POST_ITEM, postItemSaga);
}

export default watchPostItem;