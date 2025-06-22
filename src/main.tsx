import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Test from './test';
import './styles/tailwind.css';
import './styles/index.css';
import './styles/test.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Test />
  </React.StrictMode>
);
