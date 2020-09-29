import React, { Component } from 'react';

import esportpoints from './resources/esportpoints.jpg';
import codeit from './resources/codeit.jpg';
import venus from './resources/venus.jpg';
import radium from './resources/radium.jpg';
import mcu from './resources/mcu.jpg';
import tlp from './resources/tlp.jpg';
import radiumhud from './resources/radiumhud.jpg';
import nrm from './resources/nrm.jpg';
import czp from './resources/czp.jpg';

import styles from './index.module.css';

let ChevronRight = () => {
  return (
    <svg width="11" height="19" viewBox="0 0 11 19" fill="none">
      <path d="M0 1.814L1.814 0L10.884 9.07L1.814 18.14L0 16.326L7.256 9.07L0 1.814Z" fill="#15151D" />
    </svg>
  );
}

const items = [
  {
    name: 'Restaurant',
    date: 'August 2020',
    img: czp,
    link: 'http://czar-polnocy.pl/'
  },
  {
    name: 'Real Estate Agency',
    date: 'September 2019',
    img: nrm,
    link: 'https://www.behance.net/gallery/86183213/Real-Estate-Agency-Website'
  },
  {
    name: 'Olympus League In-game HUD',
    date: 'March 2019',
    img: radiumhud,
    link: 'https://www.behance.net/gallery/77954843/Olympus-CSGO-In-Game-HUD-UI-Design'
  },
  {
    name: 'Olympus League Client',
    date: 'March 2019',
    img: radium,
    link: 'https://www.behance.net/gallery/77360545/Olympus-Client-UI-Design'
  },
  {
    name: 'Translation office',
    date: 'January 2019',
    img: tlp,
    link: 'https://tlumacz-litewskiego.pl'
  },
  {
    name: 'Minecraft Universe',
    date: 'September 2018',
    img: mcu,
    link: 'https://www.behance.net/gallery/70528301/Minecraft-Universe'
  },
  {
    name: 'Coding Academy',
    date: 'April 2018',
    img: codeit,
    link: 'https://www.behance.net/gallery/67900799/Coding-Academy-Website'
  },
  {
    name: 'venus.gg',
    date: 'February 2018',
    img: venus,
    link: 'https://www.behance.net/gallery/62234093/venusgg-esport-bets'
  },
  {
    name: 'esportpoints.com',
    date: 'March 2017',
    img: esportpoints,
    link: '/img/esportpoints_full.jpg'
  },

];

class Element extends Component {
  render() {
    return (
      <div className={`${styles.element} ${this.props.mid ? styles.mid : ''}`}>
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <img src={this.props.img} alt={this.props.name} />
        </a>

        <div className={styles.card}>
          <p className={styles.title}>{this.props.name}</p>
          <p className={styles.date}>{this.props.date}</p>

          <a href={this.props.link} target="_blank" rel="noopener noreferrer">
            <ChevronRight />
          </a>
        </div>
      </div>
    );
  }
}

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.portfolioRef = React.createRef();
  }

  componentDidMount() {
    this.props.setPortfolioHeight(this.portfolioRef.current.offsetHeight)

    this.tmt = setTimeout(() => this.props.setPortfolioHeight(this.portfolioRef.current.offsetHeight), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.tmt);
    this.tmt = null;
  }

  render() {
    return (
      <section className={styles.portfolio} ref={this.portfolioRef}>
        <h3>My previous work</h3>

        <div className={styles.container}>
          {items.map((i, key) =>
            <Element setElementWidth={this.setElementWidth} {...i} key={key} mid={key === 1 || key === 4 || key === 7 || key === 10 || key === 13 || key === 16 || key === 19 || key === 22} />
          )}

        </div>
      </section>
    );
  }
}

export default Portfolio;
