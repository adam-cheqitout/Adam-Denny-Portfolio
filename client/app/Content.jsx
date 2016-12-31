import React, { Component } from 'react';
import Header from './Header.jsx';
import Cheqitout from './Cheqitout.jsx';
import LifeRenewed from './LifeRenewed.jsx';
import AutoSimulation from './AutoSimulation.jsx';
import AudioBash from './AudioBash.jsx';
import Collaboratory from './Collaboratory.jsx';
import Awards from './Awards.jsx';
import Bio from './Bio.jsx';
import Background from './Background.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  componentWillMount(){

  }
  render(){
    return (
      <div>
        <Header title="Adam Denny"/>
        <Home />
        <Cheqitout />
        <LifeRenewed />
        <AutoSimulation />
        <AudioBash />
        <Awards />
        <Bio />
        <Footer />
      </div>
    )
  }
};
