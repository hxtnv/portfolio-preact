import { h, Component } from 'preact';
import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';

import Home from './components/Home';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <AsyncRoute
          path="/friends"
          getComponent={ () => import('./components/Home').then(module => module.default) }
        />
        <AsyncRoute
          path="/friends/:id"
          getComponent={ () => import('./components/Home').then(module => module.default) }
          loading={ () => <div>loading...</div> }
        />
      </Router>
    );
  }
}

export default Routes;