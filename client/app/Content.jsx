import React, { Component } from 'react';
import Cheqitout from './Cheqitout.jsx';
import LifeRenewed from './LifeRenewed.jsx';
import AutoSimulation from './AutoSimulation.jsx';
import AudioBash from './AudioBash.jsx';
import Collaboratory from './Collaboratory.jsx';
import BioButton from './BioButton.jsx';
import Awards from './Awards.jsx';
import Background from './Background.jsx';

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
        <Background />
        <Cheqitout />
        <LifeRenewed />
        <AutoSimulation />
        <AudioBash />
        <Collaboratory />
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <BioButton />
            </div>
            <div className="col-xs-6">
              <Awards />
            </div>
          </div>
        </div>
      </div>
    )
  }
};
