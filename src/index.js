import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import App from './App';
  
const rootContainer = document.getElementById('root'); 
const root = ReactDOM.createRoot(rootContainer);


root.render(
  <React.Fragment>
    <App/>
  </React.Fragment>)

