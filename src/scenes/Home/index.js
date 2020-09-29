import React, { Component } from 'react';

import Button from '../../components/Button';
import Navbar from './components/Navbar';

import styles from './index.module.css';

let ChevronDown = () => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M6.75745 9.58575L8.17166 8.17154L11.0001 11L13.8285 8.17157L15.2427 9.58578L11.0001 13.8284L6.75745 9.58575Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11ZM11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20Z" fill="white"/>
    </svg>
  );
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.homeRef = React.createRef();

    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo(y) {
    window.scroll({
      top: y,
      behavior: 'smooth'
    });
  }

  render() {
    let age = Math.floor(((+new Date() / 1000) - 977097600) / 31536000);

    return (
      <section className={styles.home} ref={this.homeRef}>
        <Navbar scrollTo={this.scrollTo} homeRef={this.homeRef} portfolioHeight={this.props.portfolioHeight} />

        <div className={styles.centered}>
          <h1>Reimagining the web</h1>

          <h4>I’m a {age} year old UI / UX designer from Poland, working on web apps since 2015.</h4>
          <h4>Experienced in multiple front and back end languages.</h4>

          <div className={styles.btns}>
            <Button onClick={() => this.scrollTo(this.homeRef.current.offsetHeight + this.props.portfolioHeight)} primary>Contact me</Button>
            <Button onClick={() => this.scrollTo(this.homeRef.current.offsetHeight)}>See my work</Button>
          </div>
        </div>

        <button className={styles.scrollDown} onClick={() => this.scrollTo(this.homeRef.current.offsetHeight)}><ChevronDown /></button>
      </section>
    );
  }
}

export default Home;
