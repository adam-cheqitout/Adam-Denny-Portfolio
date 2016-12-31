import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default class AudioBash extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentWillMount(){
//<img src="images/map.jpg" />
  }
  openAudiobash(){
    window.open("http://dtc-wsuv.org/adenny/audiobash/next.php", "_blank")
  }
  render(){
    return (
      <div className="full-page" style={{backgroundColor: 'blue', backgroundImage: "url(images/map.jpg)"}}>
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
