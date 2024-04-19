import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './css/index';

import { App } from './App';
import { store } from './store/store';
import { ModalProvider } from './provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Provider>
  </React.StrictMode>,
);
