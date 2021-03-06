import React from 'react';
import ReactDOM from 'react-dom';

import App from '../../src/App';

ReactDOM.render(
  <App {...window.initialState}/>,
  document.getElementById('root')
);
