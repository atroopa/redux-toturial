import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore, combineReducers} from "redux"
import Counter from './components/Counter';

//const store = createStore()

// const addCounter = number => {
//   return {
//     type: "ADD_COUNTER",
//     payload: number
//   }
// }

// const decresCounter = number => {
//   return {
//     type:"DECRES_COUNTER",
//     payload: number
//   }
// }

// const counterApp = (state, action) => {

//   switch (action.type) {
//     case "ADD_COUNTER":
//       return state ++;
//     case "DECRES_COUNTER":
//       return state --;  
  
//     default:
//       return state;
//   }

// }


// const final_reducers = combineReducers({
//   counterApp,
// })

const initialState = {
  count:0,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter count={initialState.count} />
  </React.StrictMode>
);
