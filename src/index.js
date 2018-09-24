import { h, render } from 'preact';
import registerServiceWorker from './registerServiceWorker';

import Routes from './scenes/Routes';

import './index.css';

render(<Routes />, document.getElementById('root'));
registerServiceWorker();
