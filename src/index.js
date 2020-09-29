import React from 'react';
import { render } from 'react-snapshot';

import * as serviceWorker from './serviceWorker';

import Index from './scenes/Index';

import './variables.css';
import './index.css';

render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
