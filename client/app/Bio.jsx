import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Bio extends Component {
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
      <div className="full-page" style={{backgroundColor: 'gray'}}>
        <div className="project-info">
          <div className="container">
            <div className="row bottom-xs">
              <Card className="card col-sm-6 col-sm-offset-6" style={{boxShadow: "none"}}>
                <CardTitle title="Bio" />
                <CardText>
          				<h3>Professional</h3>
          				<p>I'm a Full-Stack JavaScript developer currently working as Senior Developer at CheQitout in Vancouver, Washington. A recent WSUV graduate, I was hired in this role within months of graduation.
                    I am also an instructor at Washington State where I teach game development. I graduated Washington State University
                    Vancouver in 2015 <i>Summa Cum Laude</i>. During my education at Washington State, I was highly involved in student research
                    with game development, full-stack web development, and 3D modelling and design.
          				</p>
          				<p>	I really do love tackling new projects and learning new technologies, and I'm passionate about exploring new ways of interacting with technology to enliven users with new narratives and experiences.
          				</p>
                	<h3>Personal</h3>
          				<p>	Prior to my attending WSU I was a touring musician and recording artist, which both afforded me experiences with an astoundingly diverse number of people and taught me self-reliance as well
          					as how to work hard to achieve my dreams.
          				</p>
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
