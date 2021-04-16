import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
// import allReducers from './reducers/index';
import allReducers from './reducers'; // since we named the file index.js we don't need to specify it in the import statement! NEAT!! 
import { Provider } from 'react-redux';

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



// THIS IS ONE WAY BUT WITHOUT INCLUDING REACT
// // ACTION describes what actions can be done
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }

// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }

// // REDUCER is where the state goes from the initial to the next. 
// // Based on the value of the ACTION that is passed to it, it will modify the state accordingly. 
// const counter = (state = 0, action) => {
//     switch(action.type){
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//     }
// }

// // STORE is a globalized state
// let store = createStore(counter);

// store.subscribe(() => {
//     console.log("[STORE SUBSCRIBE] Current state: ", store.getState());
// })

// // DISPATCH where the action is actually sent to the REDUCER which in turn updates the state. 
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
