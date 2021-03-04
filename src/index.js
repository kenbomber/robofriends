import React from 'react';
import ReactDOM from 'react-dom';
// ReactDOM is used for rendering websites, ReactNative renders the UI in mobile phones
import './index.css';
// React allows us add css file in each component
// import App from './App';
// import Card from './Card';
// import Cardlist from './Cardlist';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// import Hello from './Hello'
// import { robots } from './robots';
// if the export of the file is not default(one output), then we have to use deconstractive
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div className="tc">
      <App />
    </div>
  </React.StrictMode>
  ,document.getElementById('root')
);
// greeting here is a property of the Hello component
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
