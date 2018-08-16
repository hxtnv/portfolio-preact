import { h, Component } from 'preact';
import Button from './../Button';
import Background from './../Background';
import Languages from './../Languages';
import './index.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      more: false
    }

    this.toggleMore = this.toggleMore.bind(this);
  }

  toggleMore() {
    this.setState({more: !this.state.more});
  }

  render() {
    return (
      <section className="home">
        <Languages />

        <h1>Daniel Wygoński</h1>
        <h2>UI / UX Designer, Web Developer</h2>

        <p className="text-muted">Tworzę zaawansowane i eleganckie interfejsy z użyciem najnowszych technologii.</p>
        <p className="text-muted">
          Twoje zadowolenie jako klienta jest dla mnie <strong>najważniejsze</strong>. 
          <a className="toggle-more" role="button" onClick={() => this.toggleMore()}>
            {!this.state.more ? 'Czytaj więcej...' : 'Schowaj tekst...'}
          </a>

          <p className={`text-more ${!this.state.more ? 'hidden' : ''}`}>
            {this.state.more ? (
              'Posiadam wieloletnie doświadczenie z technologiami www (HTML, CSS, JS, PHP, Node), frameworkami typu React i Inferno a także systemy CMS typu Wordpress.'
            ) : '.'}
          </p>
        </p>

        <Button to="/kontakt">Kontakt</Button>
        <Button to="/portfolio">Portfolio</Button>

        <Background />
      </section>
    );
  }
}

export default Home;
