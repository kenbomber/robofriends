import React from 'react';
import ReactDOM from 'react-dom';
// ReactDOM is used for rendering websites, ReactNative renders the UI in mobile phones
import './index.css';
// React allows us add css file in each component
// import App from './App';
import Hello from './Hello.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
