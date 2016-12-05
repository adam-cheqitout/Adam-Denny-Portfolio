import React, { Component } from 'react';
import Cheqitout from './Cheqitout.jsx';
import LifeRenewed from './LifeRenewed.jsx';
import AutoSimulation from './AutoSimulation.jsx';
import AudioBash from './AudioBash.jsx';
import Collaboratory from './Collaboratory.jsx';
import BioButton from './BioButton.jsx';
import Awards from './Awards.jsx';

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
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Cheqitout />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <LifeRenewed />
          </div>
          <div className="col-sm-6">
            <AutoSimulation />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <AudioBash />
          </div>
          <div className="col-sm-6">
            <Collaboratory />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <BioButton />
          </div>
          <div className="col-sm-6">
            <Awards />
          </div>
        </div>
      </div>
    )
  }
};
