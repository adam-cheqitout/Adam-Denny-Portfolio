import React, { Component } from 'react';

var prevLeft = window.innerWidth / 2;
var prevTop = window.innerHeight / 2;

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      backgroundLeft: 50,
      backgroundTop: 50
    }
  }
  mouseMove(e){
    var leftDelta = e.clientX - prevLeft;
    var topDelta = e.clientY - prevTop;
    this.setState({
      backgroundLeft: (this.state.backgroundLeft -= (leftDelta * 0.01)),
      backgroundTop: (this.state.backgroundTop -= (topDelta * 0.01))
    });
    prevLeft = e.clientX;
    prevTop = e.clientY;
  }
  render(){
    let { left } = this.state;
    return (
      <div>
        <div className="background" onMouseMove={this.mouseMove.bind(this)} style={{backgroundPosition: `${this.state.backgroundLeft}% ${this.state.backgroundTop}%`}}>
          <h1>Full Stack Web /{"\n"}React Native Developer /{"\n"} Game Development Instructor</h1>
        </div>
        <div className="skills">
          <div className="container">
            <div className="row center-sm">
              <ul className="skills-list">
                <li>Meteor.js</li>
                <li>React Native</li>
                <li>MongoDB</li>
                <li>Unity3D</li>
                <li>3D Design</li>
                <li>UI Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    )
  }
};
