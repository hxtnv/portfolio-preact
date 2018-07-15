import { h, Component } from 'preact';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/kontakt" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;