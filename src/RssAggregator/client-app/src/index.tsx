import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import './styles/index.scss';
import {Provider} from 'react-redux';
import {setupStore} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
);
