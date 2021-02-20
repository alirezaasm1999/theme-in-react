import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// check public/config.js and index.html for connecting config.js to window 
if(window.a === 1){
  import ("../src/themes/theme1.css").then(()=>function(){})
}else if(window.a === 2){
  import ("../src/themes/theme2.css").then(()=>function(){})
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
