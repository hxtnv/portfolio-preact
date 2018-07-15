import { h, Component } from 'preact';
import Button from './../Button';
import HomeButton from './../HomeButton';
import './index.css';

import radium from '../../resources/radium.png';
import tag from '../../resources/tag.jpg';
import venus from '../../resources/venusgg.jpg';
import codeit from '../../resources/codeit.png';
import esp from '../../resources/esportpoints_full.jpg';
import dota2 from '../../resources/dota2auctions_full.jpg';

class Element extends Component {
  render() {
    return (
      <div className="element">
        <a href={this.props.link} target="_blank">
          <img src={this.props.image} alt={this.props.title} />
        </a>

        <div className="text">
          <p className="title">{this.props.title}</p>
          <p className="subtext">{this.props.date}</p>

          <Button to={this.props.link} external>Zobacz online</Button>
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

        <h2>Sprawdź moje poprzednie prace:</h2>

        <div className="line"></div>

        <div style={{width: '100%', float: 'left'}}>
          <Element
            title="Radium League Client"
            image={radium}
            link="http://radium.elhs.co"
            date="Czerwiec, 2018" />

          <Element
            title="venus.gg"
            image={venus}
            link="https://www.behance.net/gallery/62234093/venusgg-esport-bets"
            date="Luty, 2018" />

          <Element
            title="TagAnimationz Portfolio"
            image={tag}
            link="https://www.behance.net/gallery/62558235/TagAnimationzcom"
            date="Luty, 2018" />

          <Element
            title="Akademia Programowania"
            image={codeit}
            link="http://codeit.edu.pl"
            date="Kwiecień, 2018" />

          <Element
            title="dota2auctions.com"
            image={dota2}
            link="http://dota2auctions.com"
            date="Styczeń, 2018" />

          <Element
            title="esportpoints.com"
            image={esp}
            link="http://esportpoints.com"
            date="Marzec, 2017" />
        </div>

        <div className="contact">
          <Button to="/kontakt">Kontakt</Button>
        </div>
      </section>
    );
  }
}

export default Portfolio;
