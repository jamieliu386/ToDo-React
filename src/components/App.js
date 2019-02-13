import React, { Component } from 'react';
import HeaderContainer from './containers/HeaderContainer.js'
import MainContainer from './containers/MainContainer.js';
import Footer from './Footer.js'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import FooterContainer from './containers/FooterContainer.js';


class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <HeaderContainer />
          <MainContainer />
          <FooterContainer />
        </section>
      </div>
    );
  }
}

export default App;
