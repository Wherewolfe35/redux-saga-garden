import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//redux etc
import createSagaMiddleWare from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';

import App from './App';

//saga
const sagaMiddleWare = createSagaMiddleWare();

function* watcherSaga(){
  yield takeEvery('OBTAIN_PLANTS', getSaga)
}

function* getSaga(){
  try{
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

//reducers
const plantList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return [ ...state, action.payload ];
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
