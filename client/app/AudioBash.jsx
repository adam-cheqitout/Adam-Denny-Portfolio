import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class AudioBash extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  openAudiobash(){
    window.open("http://dtc-wsuv.org/adenny/audiobash/next.php", "_blank")
  }
  render(){
    return (
      <div className="full-page" style={{backgroundColor: 'blue', backgroundImage: "url(https://s3-us-west-2.amazonaws.com/adam-d-misc/map.jpg)"}}>
        <div className="project-info">
          <div className="container">
            <div className="row middle-xs">
              <Card className="card col-sm-6 col-sm-offset-6" style={{boxShadow: "none"}}>
                <CardTitle title="AudioBash" subtitle="Internet Radio Social Network" />
                <CardText>
                  AudioBash is an internet radio social network, incorporating real-time collaborative audio mixing in a browser window using PHP, MySQL, and JS.
                </CardText>
                <CardActions>
                  <FlatButton label="Go to Project Page" onTouchTap={this.openAudiobash} />
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
