import { h, Component } from 'preact';
import HomeButton from './../HomeButton';
import './index.css';

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <HomeButton />

        <h2>Skontaktuj się ze mna:</h2>

        <div className="line"></div>

        <div style={{width: '100%', float: 'left'}}></div>

        <div className="holder">
          <p className="text-muted">Wiadomość zwrotna przyjdzie na email który podasz w formularzu, dlatego upewnij się że jest poprawny.</p>
          
          <form method="POST" action="">
            <div className="form-50">
              <label>Imię i nazwisko:</label>
              <input type="text" placeholder="Jan Kowalski" id="name" required />
            </div>

            <div className="form-50">
              <label>Email:</label>
              <input type="email" placeholder="przykladowy@email.net" id="email" required />
            </div>

            <div className="form-100">
              <label>Wiadomość:</label>
              <textarea id="message" required></textarea>

              <input type="submit" value="Wyślij wiadomość" className="btn-outline" />
            </div>
          </form>
        </div>

      </section>
    );
  }
}

export default Contact;
