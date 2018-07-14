import { h, Component } from 'preact';
import { Link } from 'react-router-dom';
import './index.css';

class Button extends Component {
  render() {
    return (
      this.props.external ? 
      <a className="btn-outline" href={this.props.to} target="_blank">{this.props.children}</a> :
      <Link className="btn-outline" to={this.props.to}>{this.props.children}</Link>
    );
  }
}

export default Button;
