import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Awards extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  openSurca(){
    window.open("https://surca.wsu.edu/", "_blank");
  }
  openShowcase(){
    window.open("https://admin.vancouver.wsu.edu/research-showcase", "_blank");
  }
  render(){
    return (
      <div className="full-page" style={{backgroundColor: 'orange', backgroundImage: "url(https://s3-us-west-2.amazonaws.com/adam-d-misc/background.jpg)"}}>
        <div className="project-info">
          <div className="container">
            <div className="row bottom-xs">
              <Card className="card col-sm-6 col-sm-offset-6" style={{boxShadow: "none"}}>
                <CardTitle title="Awards" />
                <CardText>
                  <ul>
                    <li>Winner of the Crimson Award (2015) and the Gray Award (2014) in Arts and Design, WSU Showcase for Undergraduate Research and Creative Activities</li>
                    <li>Winner of the Outstanding Research Presentation Award at the 2015 WSU Vancouver Research Showcase</li>
                    <li>Graduated <i>Summa Cum Laude</i> 2015</li>
                  </ul>
                </CardText>
                <CardActions>
                  <FlatButton label="surca" onTouchTap={this.openSurca}/>
                  <FlatButton label="WSUV Research Showcase" onTouchTap={this.openShowcase}/>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
