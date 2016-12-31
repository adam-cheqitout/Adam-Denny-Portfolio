import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class LifeRenewed extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  openLifeRenewed(){
    window.open("http://dtc-wsuv.org/projects/life-renewed/", "_blank");
  }
  render(){
    return (
      <div className="full-page" style={{backgroundColor: 'gray', backgroundImage: "url(images/life_desktop.jpg)"}}>
        <div className="project-info">
          <div className="container">
            <div className="row bottom-xs">
              <Card className="card col-sm-6 col-sm-offset-6" style={{boxShadow: "none"}}>
                <CardTitle title="Life Renewed" subtitle="Exhibit at the Mt. St. Helens Science and Learning Center" />
                  <CardText>
                    An accelerometer-controlled 3D video game on PC and Android which incorporates a flight simulator, a hacked DualShock 3 controller, a separate extra-wide touchscreen interface, and augmented reality. The game allows the player to explore 289 square miles of terrain surrounding Mount St. Helens. Built using Unity3D in both JavaScript and C#.
                  </CardText>
                <CardActions>
                  <FlatButton label="Go to Life Renewed" onTouchTap={this.openLifeRenewed} />
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
