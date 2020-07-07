import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';


import App from './app.js';

function Main () {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);

serviceWorker.unregister();

