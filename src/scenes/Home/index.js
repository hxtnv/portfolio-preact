import { h, Component } from 'preact';

import Button from './../../components/Button';
import Background from './Background';
import Languages from './../../components/Languages';

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

        <Button to="/kontakt">{translation[_store.language].contact}</Button>
        <Button to="/portfolio">{translation[_store.language].portfolio}</Button>

        <Background />
      </section>
    );
  }
}

export default Home;
// export default view(Home);
