import { h, Component } from 'preact';
// import './index.css'; // we lazy-load that in public/index.html

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
