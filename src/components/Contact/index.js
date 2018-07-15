import { h, Component } from 'preact';
import Button from './../Button';
import HomeButton from './../HomeButton';
import './index.css';

class Contact extends Component {
  render() {
    return (
      <section className="portfolio">
        <HomeButton />

        <h2>Skontaktuj się ze mna:</h2>

        <div className="line"></div>

        <div style={{width: '100%', float: 'left'}}>
          <p className="text-muted">Wiadomość zwrotna przyjdzie na email który podasz w formularzu, dlatego upewnij się że jest poprawny.</p>
        </div>


        <div className="contact">
          <Button to="/kontakt">Kontakt</Button>
        </div>
      </section>
    );
  }
}

export default Contact;
