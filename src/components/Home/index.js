import { h, Component } from 'preact';
import Button from './../Button';
import './index.css';

class Home extends Component {
  render() {
    return (
      <section className="home">
        <h1>Daniel Wygoński</h1>
        <h2>UI / UX Designer, Web Developer</h2>

        <p>Tworzę zaawansowane i eleganckie interfejsy z użyciem najnowszych technologii.</p>
        <p>Twoje zadowolenie jako klienta jest dla mnie <strong>najważniejsze</strong>.</p>

        <Button to="/kontakt">Kontakt</Button>
        <Button to="/portfolio">Portfolio</Button>
      </section>
    );
  }
}

export default Home;
