import { h, Component } from 'preact';

import HomeButton from './../../components/HomeButton';

import _store from '../../services/store';
import translation from '../../translation';

import './index.css';

const MailIcon = () => (<svg aria-hidden="true" data-prefix="far" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>);
const LinkedInIcon = () => (<svg aria-hidden="true" data-prefix="fab" data-icon="linkedin-in" class="svg-inline--fa fa-linkedin-in fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448h-.1z"></path></svg>);

class Block extends Component {
  render() {
    return (
      <a href={this.props.link} target={this.props.newtab ? '_blank' : null}>
        <div className="block">
          {this.props.icon}
          <p>{this.props.text}</p>
        </div>
      </a>
    );
  }
}

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <HomeButton />

        <h2>{translation[_store.language].contact_header}</h2>

        <div className="line"></div>

        <div style={{width: '100%', float: 'left'}}></div>

        <div className="holder">
          <Block icon={<MailIcon />} text="wygonski@gmail.com" link="mailto:wygonski@gmail.com" />
          <Block icon={<LinkedInIcon />} text="LinkedIn" link="https://www.linkedin.com/in/daniel-wygonski/" newtab />
        </div>

      </section>
    );
  }
}

export default Contact;
