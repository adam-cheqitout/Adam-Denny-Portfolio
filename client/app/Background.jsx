import React, { Component } from 'react';

export default class Awards extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: 0,
      stages: 0,
      bg1: 1,
      bg2: 0,
      bg3: 0,
      bg4: 0,
      bg5: 0,
    }
  }
  componentDidMount(){
    var body = document.body,
    html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    var stages = this.state.height / window.innerHeight;
    this.setState({height: Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight )}, () => {
      this.setState({stages: this.state.height / window.innerHeight});
    });
    window.onscroll = this._handleScroll.bind(this);
  }
  _handleScroll(e){
    console.log(this.state.height, this.state.stages);
    console.log(window.scrollY);
  }
  render(){
    return (
      <div className="page-background"></div>
    )
  }
};
