import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default class Cheqitout extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentWillMount(){
    //<img src="https://s3-us-west-2.amazonaws.com/cheqitout/HomeSliderPics_2.jpg" className="main-image"/>
    //<img src="https://s3-us-west-2.amazonaws.com/cheqitout/cio_icon.png" className="cheqitout-logo" />
  }
  openCheqitout(){
    window.open('https://cheqitout.co', "_blank");
  }
  render(){
    return (
      <div className="full-page" style={{backgroundColor: 'orange', backgroundImage: "url(https://s3-us-west-2.amazonaws.com/cheqitout/HomeSliderPics_2.jpg)"}}>
        <div className="project-info">
          <div className="container">
            <img src="https://s3-us-west-2.amazonaws.com/cheqitout/cio_icon.png" className="cheqitout-logo" />
            <div className="row bottom-xs">
              <Card className="card col-sm-6 col-sm-offset-6" style={{boxShadow: "none"}}>
                <CardTitle title="CheQitout" subtitle="Keeping It Local" />
                <CardText>
                  <p>CheQitout is a platform where local businesses can post and sell deals, memberships, and tickets and reach audiences that would normally
                  be out of reach for a small merchant. Adam is senior developer for the Vancouver-based startup.</p>
                  <p>Adam wrote CheQitout’s backbone in <span className="em">Meteor.js</span>, the Android and iOS apps in <span className="em">React Native</span>, as well as utilizing technologies such as <span className="em">Braintree Marketplace</span>, <span className="em">Google Firebase</span>, <span className="em">Plivo</span>, <span className="em">Nginx</span>, <span className="em">AWS</span>, <span className="em">DigitalOcean</span>, and more.</p>
                </CardText>
                <CardActions>
                  <FlatButton label="Go to CheQitout" onTouchTap={this.openCheqitout}/>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
