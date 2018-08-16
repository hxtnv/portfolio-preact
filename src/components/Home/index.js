import { h, Component } from 'preact';

import Button from './../Button';
import Background from './../Background';
import Languages from './../Languages';

import _store from '../../services/store';
import translation from '../../translation';

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

        <p className="text-muted">{translation[_store.language].home_desc1}</p>
        <p className="text-muted">
          <span dangerouslySetInnerHTML={{__html: translation[_store.language].home_desc2}}></span>

          <a className="toggle-more" role="button" onClick={() => this.toggleMore()}>
            {!this.state.more ? translation[_store.language].home_read_more : translation[_store.language].home_hide_text}
          </a>

          <p className={`text-more ${!this.state.more ? 'hidden' : ''}`}>
            {this.state.more ? <span dangerouslySetInnerHTML={{__html: translation[_store.language].home_spec}}></span> : '.'}
          </p>
        </p>

        <Button to="/kontakt">{translation[_store.language].contact}</Button>
        <Button to="/portfolio">{translation[_store.language].portfolio}</Button>

        <Background />
      </section>
    );
  }
}

export default Home;
// export default view(Home);
