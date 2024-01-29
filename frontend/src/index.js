import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css'
import Footer from './components/footer/Footer';
import Router from './components/router/Router';
import { Provider } from 'react-redux'
import { store } from './services/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
      <Footer />
    </Provider>
  </React.StrictMode>
);
