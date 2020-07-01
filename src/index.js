import React from 'react';
import ReactDOM from 'react-dom';
import './styles/custom-styles.css';
import AppRoute from './routes';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';


ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <AppRoute />
      </BrowserRouter>
   </Provider>,
   document.getElementById('root')
);

