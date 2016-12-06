import React, { Component } from 'react';

export default class Awards extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: 0,
      stages: 0
    }
  }
  componentDidMount(){
    var body = document.body,
    html = document.documentElement;
    console.log(Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight ));
    this.setState({height: Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight )}, () => {
      this.setState({stages: this.state.height / window.innerHeight});
    });
    window.onscroll = this._handleScroll.bind(this);
  }
  _handleScroll(e){
    console.log(this.state.height, this.state.stages);
  }
  render(){
    return (
      <div className="page-background"></div>
    )
  }
};
