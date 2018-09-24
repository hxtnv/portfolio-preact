import { h, Component } from 'preact';

import HomeButton from './../../components/HomeButton';

import _store from '../../services/store';
import translation from '../../translation';

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
          this.setState({returnMsg: {color: '#5cb85c', msg: translation[_store.language].contact_msg_sent_success}});
        }else {
          this.setState({returnMsg: {color: '#d9534f', msg: translation[_store.language].contact_msg_sent_error}});
        }
      }).catch(e => {
        console.log(e);
        this.setState({returnMsg: {color: '#d9534f', msg: translation[_store.language].contact_msg_sent_error}});
      });
    }).catch(e => {
      console.log(e);
      this.setState({returnMsg: {color: '#d9534f', msg: translation[_store.language].contact_msg_sent_error}});
    });
  }

  render() {
    return (
      <section className="contact">
        <HomeButton />

        <h2>{translation[_store.language].contact_header}</h2>

        <div className="line"></div>

        <div style={{width: '100%', float: 'left'}}></div>

        <div className="holder">
          <p className="text-muted">{translation[_store.language].contact_email_fix}</p>
          
          <form onSubmit={this.sendMessage}>
            <div className="form-50">
              <label>{translation[_store.language].contact_full_name}</label>
              <input type="text" placeholder={translation[_store.language].contact_full_name_example} onChange={(e) => this.setState({name: e.target.value})} required />
            </div>

            <div className="form-50">
              <label>{translation[_store.language].contact_email}</label>
              <input type="email" placeholder={translation[_store.language].contact_email_example} onChange={(e) => this.setState({email: e.target.value})} required />
            </div>

            <div className="form-100">
              <label>{translation[_store.language].contact_message}</label>
              <textarea id="message" onChange={(e) => this.setState({message: e.target.value})} required></textarea>

              <p style={{color: this.state.returnMsg.color, margin: '0', minHeight: '22px'}}>{this.state.returnMsg.msg}</p>

              <input type="submit" value={translation[_store.language].contact_send_message} className="btn-outline" />
            </div>
          </form>
        </div>

      </section>
    );
  }
}

export default Contact;
