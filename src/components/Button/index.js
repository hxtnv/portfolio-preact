import React, { Component } from 'react';

import styles from './index.module.css';

class Button extends Component {
  render() {
    return (
      <button
        className={`${styles.btn} ${this.props.disabled ? styles.disabled : ''} ${this.props.primary ? styles.primary : ''} ${this.props.block ? styles.block : ''}`}
        onClick={!this.props.disabled ? this.props.onClick || null : null}
        style={this.props.style || null}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
