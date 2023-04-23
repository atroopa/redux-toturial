import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore, combineReducers} from "redux"
import Counter from './components/Counter';
import { Provider } from 'react-redux';


const store = createStore(reducer);

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
  <Provider store={store}>
    <React.StrictMode>
      <Counter />
    </React.StrictMode>
  </Provider>
);
