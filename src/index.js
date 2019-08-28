import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//redux etc
import createSagaMiddleWare from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';

import App from './App';

//saga
const sagaMiddleWare = createSagaMiddleWare();

function* watcherSaga() {
  yield takeEvery('OBTAIN_PLANTS', getSaga);
  yield takeEvery('ADD_PLANT', postSaga);
  yield takeEvery('REMOVE_PLANT', deleteSaga);
}

function* getSaga(action) {
  try {
    let plantResponse = yield axios.get('/api/plant');
    console.log('Response from server', plantResponse.data);
    yield put({
      type: 'SET_PLANT_LIST',
      payload: plantResponse.data
    })
  } catch (error) {
    console.log('error in GET', error);
  }
}

function* postSaga(action){
  try{
    yield axios.post('/api/plant', action.payload);
    yield put({
      type: 'OBTAIN_PLANTS'
    })
  } catch(error){
    console.log('error in POST', error);
  }
}
function* deleteSaga(action){
  try{
    yield axios.delete(`/api/plant/${action.payload}`);
    yield put({
      type: 'OBTAIN_PLANTS'
    });
  } catch (error) {
    console.log('error in DELETE', error);
  }
}

//reducers
const plantList = (state = [], action) => {
  switch (action.type) {
    case 'SET_PLANT_LIST':
      return action.payload;
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    plantList
  }),
  applyMiddleware(sagaMiddleWare, logger)
);

sagaMiddleWare.run(watcherSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
