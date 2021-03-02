import axios from 'axios'
import { call, put, takeEvery, all, fork } from 'redux-saga/effects'
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, 
         LOGOUT_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, 
         USER_LOADING_SUCCESS, USER_LOADING_FAILURE, USER_LOADING_REQUEST, 
         CLEAR_ERROR_REQUEST, CLEAR_ERROR_SUCCESS, CLEAR_ERROR_FAILURE, 
         REGISTER_FAILURE, REGISTER_SUCCESS, REGISTER_REQUEST } from '../types'

// Login 
const loginUserAPI = (loginData) => {
  console.log(loginData, "loginData")
  const config = {
    headers: {
      "Content-Type": "application/json",
    }
  }
  return axios.post('api/auth', loginData, config)
}

function* loginUser(action) {
  try {
    const result = yield call(loginUserAPI, action.payload)
    console.log(result, "login")
    yield put({
      type: LOGIN_SUCCESS,
      payload: result.data
    })
  } catch(e) {
    yield put({
      type: LOGIN_FAILURE,
      payload: e.response
    })
  }
}

function* watchLoginUser() {
  yield takeEvery(LOGIN_REQUEST, loginUser)
}

// Logout
function* logout(action) {
  try {
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch(e) {
    yield put({
      type: LOGOUT_FAILURE,
      payload: e.response,
    });
    console.log(e);
  }
}

function* watchLogout() {
  yield takeEvery(LOGOUT_REQUEST, logout)
}

//function* watchclearError(){
//  yield takeEvery(CLEAR_ERROR_REQUEST, clearError)
//}

// User Loading  
const userLoadingAPI = (token) => {
  console.log(token)
  const config = {
    headers: {
      "Content-Type": "application/json",
    }
  }
  if(token) {
    config.headers["x-auth-token"] = token
  }
  return axios.get('api/auth/user', config)
}

function* userLoading(action) {
  try {
    console.log(action, "userLoading")
    const result = yield call(userLoadingAPI, action.payload)
    yield put({
      type: USER_LOADING_SUCCESS,
      payload: result.data
    })
  } catch(e) {
    yield put({
      type: USER_LOADING_FAILURE,
      payload: e.response
    })
  }
}

function* watchuserLoading() {
  yield takeEvery(USER_LOADING_REQUEST, userLoading)
}

// Register 
const registerUserAPI = (req) => {
  console.log(req, "req")
  const config = {
    headers: {
      "Content-Type": "application/json",
    }
  }
  return axios.post('api/user', req)
}

function* registerUser(action) {
  try {
    const result = yield call(registerUserAPI, action.payload)
    console.log(result, "Register data")
    yield put({
      type: REGISTER_SUCCESS,
      payload: result.data
    })
  } catch(e) {
    yield put({
      type: REGISTER_FAILURE,
      payload: e.response
    })
  }
}

function* watchregisterUser() {
  yield takeEvery(REGISTER_REQUEST, registerUser)
}

// Clear error 
function* clearError(action) {
  try {
    yield put({
      type: CLEAR_ERROR_SUCCESS,
    })
  } catch(e) {
    yield put({
      type: CLEAR_ERROR_FAILURE,
      payload: e.response
    })
  }
}

function* watchclearError() {
  yield takeEvery(CLEAR_ERROR_REQUEST, clearError)
}

export default function* authSaga() {
  yield all ([
    fork(watchLoginUser),
    fork(watchLogout),
    fork(watchuserLoading),
    fork(watchregisterUser),
    fork(watchclearError),
  ])
}
