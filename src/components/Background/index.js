import { h, Component } from 'preact';
import { Link } from 'react-router-dom';
import './index.css';

class Background extends Component {
  render() {
    return (
      <div id="particles">
        <div id="stars"></div>
        <div id="stars2"></div>
      </div>
    );
  }
}

export default Background;
