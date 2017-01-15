import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class AutoSimulation extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  openGithub(){
    window.open("https://github.com/adam-cheqitout/WSUV-Sandbox-Project", "_blank");
  }
  render(){
    return (
      <div className="full-page" style={{backgroundColor: 'green', backgroundImage: "url(https://s3-us-west-2.amazonaws.com/adam-d-misc/interior1.jpg)"}}>
        <div className="project-info">
          <div className="container">
            <div className="row middle-xs">
              <Card className="card col-sm-6 col-sm-offset-6" style={{boxShadow: "none"}}>
                <CardTitle title="Auto Simulation" subtitle="Vehicle Dynamics in Unity 5" />
                <CardText>
                  Developer of a semi-truck simulator using Unity 5 with a special focus on ensuring that the driving dynamics were as accurate as possible. Because users tend to notice and focus on inaccuracies and poor visuals rather than the instructive component of the simulator, special focus had to be paid to the overall visuals of the game so as to remove visual distractions as much as possible.
                </CardText>
                <CardActions>
                  <FlatButton label="See Other Unity Projects" onTouchTap={this.openGithub}/>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
