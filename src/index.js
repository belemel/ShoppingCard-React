import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "../src/home/Home";
import { store } from './store/store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Provider store={store}>
      <React.StrictMode>
        <Home />
      </React.StrictMode>
  </Provider>
  
 
);

