import React, { Component } from 'react';

import logo from './resources/logo.svg';

import styles from './index.module.css';

class Navbar extends Component {
  render() {
    return (
      <div className={styles.nav}>
        <img src={logo} alt="Logo" />

        <ul>
          <button onClick={() => this.props.scrollTo(this.props.homeRef.current.offsetHeight)}><li>Portfolio</li></button>
          <button onClick={() => this.props.scrollTo(this.props.homeRef.current.offsetHeight + this.props.portfolioHeight)}><li>Contact</li></button>
        </ul>
      </div>
    );
  }
}

export default Navbar;
