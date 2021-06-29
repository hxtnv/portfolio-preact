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
import versus from './resources/versus-min.png';
import insolve from './resources/insolve.png';

import styles from './index.module.css';

let ChevronRight = () => {
  return (
    <svg width="11" height="19" viewBox="0 0 11 19" fill="none">
      <path d="M0 1.814L1.814 0L10.884 9.07L1.814 18.14L0 16.326L7.256 9.07L0 1.814Z" fill="#15151D" />
    </svg>
  );
}

let Close = (props) => {
  return <svg onClick={props.onClick} className={styles.close} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
}

let Modal = (props) => {
  let item = items[props.index];

  return (
    <>
      <div className={styles.overlay} onClick={(e) => props.toggleModal(e, props.index)} data-visible={props.visible} />
      <div className={styles.modal} data-visible={props.visible}>
        <div className={styles.img} style={{background: `url(${item.img})`}} />

        <div className={styles.content}>
          <Close onClick={(e) => props.toggleModal(e, props.index)} />
          <h2>{item.name}</h2>
          <p className={styles.date}>{item.date}</p>
          <div className={styles.tags}>
            {item.tags.map((i, key) => <p key={key}>{i}</p>)}
          </div>

          <p className={styles.desc}>{item.desc || 'No description provided.'}</p>
          
          <a href={item.link} className={styles.see} target="_blank" rel="noopener noreferrer">
            See online
          </a>
        </div>
      </div>
    </>
  );
}

const items = [
  {
    name: 'CSGOVersus.com',
    date: 'April 2021',
    img: versus,
    link: 'https://csgoversus.com',
    tags: ['React', 'Socket.io', 'Node.js'],
    desc: 'CSGOVersus is a platform for CS:GO players who want to test their skills in a competitive 1v1 environment. Sign in, select the map type, choose the coin amount, and play! We strive to provide the smoothest cheat-free 1v1 experience a CS:GO player could get, as well as reward the hours put into practice.'
  },
  {
    name: 'Insolve.gg',
    date: 'January 2021',
    img: insolve,
    link: '/img/insolve.png',
    tags: ['React', 'Figma'],
    desc: 'Concept for an online gambling platform.'
  },
  {
    name: 'Restaurant',
    date: 'August 2020',
    img: czp,
    link: 'http://czar-polnocy.pl/',
    tags: ['React', 'HTML', 'CSS'],
  },
  {
    name: 'Real Estate Agency',
    date: 'September 2019',
    img: nrm,
    link: 'https://www.behance.net/gallery/86183213/Real-Estate-Agency-Website',
    tags: ['React', 'Figma', 'Photoshop'],
    desc: 'Website for a local real estate agency, designed in Figma and coded using React.'
  },
  {
    name: 'Olympus League In-game HUD',
    date: 'March 2019',
    img: radiumhud,
    link: 'https://www.behance.net/gallery/77954843/Olympus-CSGO-In-Game-HUD-UI-Design',
    tags: ['nw.js', 'Node.js', 'MySQL', 'HTML', 'CSS'],
    desc: `This is a HUD Overlay for a game called Counter Strike, coded using nw.js. It's used by tournament organizers to make the stream nicer to look at. Uses a MySQL database to display real names and photos of players.`
  },
  {
    name: 'Olympus League Client',
    date: 'March 2019',
    img: radium,
    link: 'https://www.behance.net/gallery/77360545/Olympus-Client-UI-Design',
    tags: ['React', 'Electron', 'Node.js', 'Socket.io', 'MySQL'],
    desc: 'A web-based client for the CS:GO Olympus League, which allows players to create teams, play matches against other teams, climb the leaderboard and much more. Desktop app powered by Electron.'
  },
  {
    name: 'Translation office',
    date: 'January 2019',
    img: tlp,
    link: 'https://tlumacz-litewskiego.pl',
    tags: ['React', 'Figma'],
  },
  {
    name: 'Minecraft Universe',
    date: 'September 2018',
    img: mcu,
    link: 'https://www.behance.net/gallery/70528301/Minecraft-Universe',
    tags: ['React', 'Figma', 'Node.js'],
  },
  {
    name: 'Coding Academy',
    date: 'April 2018',
    img: codeit,
    link: 'https://www.behance.net/gallery/67900799/Coding-Academy-Website',
    tags: ['React'],
  },
  {
    name: 'venus.gg',
    date: 'February 2018',
    img: venus,
    link: 'https://www.behance.net/gallery/62234093/venusgg-esport-bets',
    tags: ['Figma'],
    desc: 'Concept for a website that allows betting CS:GO skins on professional matches.'
  },
  {
    name: 'esportpoints.com',
    date: 'March 2017',
    img: esportpoints,
    link: '/img/esportpoints_full.jpg',
    tags: ['HTML', 'CSS'],
  },

];

class Element extends Component {
  render() {
    return (
      <div className={`${styles.element} ${this.props.mid ? styles.mid : ''}`}>
        <a href={this.props.link} onClick={(e) => this.props.toggleModal(e, this.props.index)}>
          <img src={this.props.img} alt={this.props.name} />
        </a>

        <div className={styles.card}>
          <p className={styles.title}>{this.props.name}</p>
          <p className={styles.date}>{this.props.date}</p>

          <a href={this.props.link} onClick={(e) => this.props.toggleModal(e, this.props.index)}>
            <ChevronRight />
          </a>
        </div>
      </div>
    );
  }
}

class Portfolio extends Component {
  state = {
    isModalOpen: false,
    index: 0
  }

  constructor(props) {
    super(props);

    this.portfolioRef = React.createRef();
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e, i) {
    e.preventDefault();

    this.setState({isModalOpen: !this.state.isModalOpen, index: i});
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
            <Element toggleModal={this.toggleModal} index={key} setElementWidth={this.setElementWidth} {...i} key={key} mid={key === 1 || key === 4 || key === 7 || key === 10 || key === 13 || key === 16 || key === 19 || key === 22} />
          )}
        </div>

        <Modal toggleModal={this.toggleModal} index={this.state.index} visible={this.state.isModalOpen} />
      </section>
    );
  }
}

export default Portfolio;
