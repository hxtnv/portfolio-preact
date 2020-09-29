import React, { Component } from 'react';

import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = { portfolioHeight: 0 };

    this.setPortfolioHeight = this.setPortfolioHeight.bind(this);
  }

  setPortfolioHeight(height) {
    this.setState({portfolioHeight: height});
  }

  render() {
    return (
      <>
        <Home portfolioHeight={this.state.portfolioHeight} />
        <Portfolio setPortfolioHeight={this.setPortfolioHeight} />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default Index;