import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux' ;
import counterReducer from './reducer';

const Increment =()=>{
  return {type: 'Increment'}
}
const Decrement =()=>{
  return {type: 'Decrement'}
}
const store =createStore(counterReducer,window.__REDUX_DEVTOOLS_EXTENSION__ 
  && window.__REDUX_DEVTOOLS_EXTENSION__());
//display the state's value in console
store.subscribe (()=>console.log(store.getState()))

store.dispatch(Increment())
store.dispatch(Increment())
store.dispatch(Decrement())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
