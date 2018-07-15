import { h, Component } from 'preact';
import HomeButton from './../HomeButton';
import './index.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
  }

  state = {
    name: '',
    email: '',
    message: '',
    returnMsg: {color: '#fff', msg: ''}
  }

  sendMessage(e) {
    e.preventDefault();

    if(!this.state.name || !this.state.email || !this.state.message) return;

    let _state = this.state;

    fetch('https://wygonski.eu/send.php', {
      method: 'post',
      body: `name=${_state.name}&email=${_state.email}&message=${_state.message}`,
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }).then(response => {
      console.log(response);


      response.json().then((data) => {
        console.log(data);
        if(data.success) {
          this.setState({returnMsg: {color: '#5cb85c', msg: 'Wiadomość wysłana - otrzymasz odpowiedź najszybciej jak to możliwe!'}});
        }else {
          this.setState({returnMsg: {color: '#d9534f', msg: 'Nie udało się wysłać wiadomości - spróbuj ponownie.'}});
        }
      }).catch(e => {
        console.log(e);
        this.setState({returnMsg: {color: '#d9534f', msg: 'Nie udało się wysłać wiadomości - spróbuj ponownie.'}});
      });
    }).catch(e => {
      console.log(e);
      this.setState({returnMsg: {color: '#d9534f', msg: 'Nie udało się wysłać wiadomości - spróbuj ponownie.'}});
    });
  }

  render() {
    return (
      <section className="contact">
        <HomeButton />

        <h2>Skontaktuj się ze mna:</h2>

        <div className="line"></div>

        <div style={{width: '100%', float: 'left'}}></div>

        <div className="holder">
          <p className="text-muted">Wiadomość zwrotna przyjdzie na email który podasz w formularzu, dlatego upewnij się że jest poprawny.</p>
          
          <form onSubmit={this.sendMessage}>
            <div className="form-50">
              <label>Imię i nazwisko:</label>
              <input type="text" placeholder="Jan Kowalski" onChange={(e) => this.setState({name: e.target.value})} required />
            </div>

            <div className="form-50">
              <label>Email:</label>
              <input type="email" placeholder="przykladowy@email.net" onChange={(e) => this.setState({email: e.target.value})} required />
            </div>

            <div className="form-100">
              <label>Wiadomość:</label>
              <textarea id="message" onChange={(e) => this.setState({message: e.target.value})} required></textarea>

              <p style={{color: this.state.returnMsg.color, margin: '0', minHeight: '22px'}}>{this.state.returnMsg.msg}</p>

              <input type="submit" value="Wyślij wiadomość" className="btn-outline" />
            </div>
          </form>
        </div>

      </section>
    );
  }
}

export default Contact;
