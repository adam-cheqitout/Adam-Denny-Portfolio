import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentWillMount(){
//  <img src="images/life_desktop.jpg" />
  }
  openLifeRenewed(){
    window.open("http://dtc-wsuv.org/projects/life-renewed/", "_blank");
  }
  render(){
    return (
      <footer>
        <div className="container">
          <RaisedButton
            href="https://github.com/adam-cheqitout"
            target="_blank"
            label="Github"
            primary={true}
            icon={<FontIcon className="muidocs-icon-custom-github" />}
          />
          <RaisedButton
            href="https://www.linkedin.com/in/adam-denny-72129b92"
            target="_blank"
            label="Linkedin"
            secondary={true}
            style={{marginLeft: "20px"}}
          />
          <Link to="contact">
            <RaisedButton
              target="_blank"
              label="Contact"
              backgroundColor="gray"
              style={{marginLeft: "20px"}}
            />
          </Link>
        <div className="copyright">&copy; 2016 Adam Denny</div>
        </div>
      </footer>
    )
  }
};
