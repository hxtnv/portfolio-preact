import { h, Component } from 'preact';
import { Link } from 'react-router-dom';
import './index.css';

class Button extends Component {
  render() {
    return (
      <Link className="btn-outline" to={this.props.to}>{this.props.children}</Link>
    );
  }
}

export default Button;
