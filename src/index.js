import { h, render } from 'preact';
import registerServiceWorker from './registerServiceWorker';

import Routes from './Routes';

import './index.css';

render(<Routes />, document.getElementById('root'));
registerServiceWorker();
