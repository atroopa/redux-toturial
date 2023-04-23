import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore, combineReducers} from "redux"
import Counter from './components/Counter';



const initialState = {
  count:0,
}

const reducer = (state= initialState, action) => {
  switch (action.type) {
    
    case "INCREMENT_COUNTER":
      return {count: state.count + action.payload};

    case "DECREMENT_COUNTER":
      return{count: state.count - action.payload};
  
    default:
      return state;
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter count={initialState.count} />
  </React.StrictMode>
);
