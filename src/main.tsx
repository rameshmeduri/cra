import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Test from './components/Test';

import './styles/tailwind.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Test />
  </React.StrictMode>
);