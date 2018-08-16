import { h, Component } from 'preact';
import _store from '../../services/store';

import flags from '../../resources/flags.png';

import './index.css';

class Languages extends Component {
  changeLanguage(to) {
    _store.language = to;
    _store.updateLanguage();

    console.log(`changed language to ${to}`);
  }

  render() {
    return (
      <div className="language-list">
        <div onClick={() => this.changeLanguage('en')} style={{background: `url('${flags}') no-repeat`}} class="flag flag-us" alt="English" title="English"></div>
        <div onClick={() => this.changeLanguage('pl')} style={{background: `url('${flags}') no-repeat`}} class="flag flag-pl" alt="Polski" title="Polski"></div>
        <div onClick={() => this.changeLanguage('lt')} style={{background: `url('${flags}') no-repeat`}} class="flag flag-lt" alt="Lietuvių" title="Lietuvių"></div>
      </div>
    );
  }
}

export default Languages;
