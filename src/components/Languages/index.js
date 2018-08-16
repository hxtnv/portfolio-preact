import { h, Component } from 'preact';
import flags from '../../resources/flags.png';
import './index.css';

class Languages extends Component {
  render() {
    return (
      <div className="language-list">
        <div style={{background: `url('${flags}') no-repeat`}} class="flag flag-us" alt="English" title="English"></div>
        <div style={{background: `url('${flags}') no-repeat`}} class="flag flag-pl" alt="Polski" title="Polski"></div>
        <div style={{background: `url('${flags}') no-repeat`}} class="flag flag-lt" alt="Lietuvių" title="Lietuvių"></div>
      </div>
    );
  }
}

export default Languages;
