import { h, Component } from 'preact';

import HomeButton from './../../components/HomeButton';
import Button from './../../components/Button';

import _store from '../../services/store';
import translation from '../../translation';

import './index.css';

import mcu from '../../resources/mcu.jpg';
import radium from '../../resources/radium.png';
import tag from '../../resources/tag.jpg';
import venus from '../../resources/venusgg.jpg';
import codeit from '../../resources/codeit.png';
import esp from '../../resources/esportpoints_full.jpg';
import dota2 from '../../resources/dota2auctions_full.jpg';
import tlp from '../../resources/tlp_preview.png';
import czarpln from '../../resources/czarpln.png';

class Element extends Component {
  render() {
    return (
      <div className="element">
        <div className="img">
          <a href={this.props.link} target="_blank">
            <img src={this.props.image} alt={this.props.title} />
          </a>
        </div>

        <div className="text">
          <p className="title" title={this.props.title}>{this.props.title}</p>
          <p className="subtext" title={this.props.date}>{this.props.date}</p>

          <a href={this.props.link} target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </a>
        </div>
      </div>
    );
  }
}

class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio">
        <HomeButton />

        <h2>{translation[_store.language].portfolio_prev}</h2>

        <div className="line"></div>

        <div style={{width: '100%', float: 'left'}}>
          <Element
            title="Restaurant website"
            image={czarpln}
            link="http://czar-polnocy.pl"
            date={`${translation[_store.language].months.aug}, 2020`} />

          <Element
            title="Translation office website"
            image={tlp}
            link="https://tlumacz-litewskiego.pl"
            date={`${translation[_store.language].months.jan}, 2019`} />

          <Element
            title="Minecraft Universe"
            image={mcu}
            link="https://sv.mcuniverse.pl/"
            date={`${translation[_store.language].months.sep}, 2018`} />

          <Element
            title="Radium League Client"
            image={radium}
            link="http://radium.elhs.co"
            date={`${translation[_store.language].months.jun}, 2018`} />

          <Element
            title="venus.gg"
            image={venus}
            link="https://www.behance.net/gallery/62234093/venusgg-esport-bets"
            date={`${translation[_store.language].months.feb}, 2018`} />

          <Element
            title="TagAnimationz Portfolio"
            image={tag}
            link="https://www.behance.net/gallery/62558235/TagAnimationzcom"
            date={`${translation[_store.language].months.feb}, 2018`} />

          <Element
            title="Akademia Programowania"
            image={codeit}
            link="http://codeit.edu.pl"
            date={`${translation[_store.language].months.apr}, 2018`} />

          <Element
            title="dota2auctions.com"
            image={dota2}
            link="http://dota2auctions.com"
            date={`${translation[_store.language].months.jan}, 2018`} />

          <Element
            title="esportpoints.com"
            image={esp}
            link="http://esportpoints.com"
            date={`${translation[_store.language].months.mar}, 2017`} />
        </div>

        <div className="contact">
          <Button to="/kontakt">{translation[_store.language].contact}</Button>
        </div>
      </section>
    );
  }
}

export default Portfolio;
