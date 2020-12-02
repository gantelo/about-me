import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';
import Main from './main';

ReactDOM.render(
  <React.StrictMode>
    <div className='main-container'>
      <Main />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
