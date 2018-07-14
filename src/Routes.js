import { h, Component } from 'preact';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/portfolio" render={() => <p>portfolio here</p>} />
          <Route path="/kontakt" render={() => <p>kontakt</p>} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;