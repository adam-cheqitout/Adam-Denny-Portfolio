import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default class LifeRenewed extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentWillMount(){
//  <img src="images/life_desktop.jpg" />
  }

  render(){
    return (
      <div className="full-page" style={{backgroundColor: 'gray'}}>
        <div className="container">
          <div className="row middle-xs">
            <Card className="card col-sm-6 col-sm-offset-6">
              <CardTitle title="Life Renewed" subtitle="Exhibit at the Mt. St. Helens Science and Learning Center" />
              <CardText>
                An accelerometer-controlled 3D video game on PC and Android which incorporates a flight simulator, a hacked DualShock 3 controller, a separate extra-wide touchscreen interface, and augmented reality. The game allows the player to explore 289 square miles of terrain surrounding Mount St. Helens. Built using Unity3D in both JavaScript and C#.
              </CardText>
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    )
  }
};
