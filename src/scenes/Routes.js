import { h, Component } from 'preact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import Portfolio from './Portfolio';

import _store from './../services/store';
import translation from './../translation';

class Routes extends Component {
  constructor(props) {
    super(props);

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage() {
    // it's a bit hacky way, we use it
    // because react-easy-state isn't
    // fully compatible with preact
    document.title = translation[_store.language].doc_title;
    
    this.forceUpdate();
  }

  componentWillMount() {
    document.title = translation[_store.language].doc_title;

    _store.updateLanguage = this.updateLanguage;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/kontakt" component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;