import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      navState: false
    }
  }
  toggleNav(){
    if(this.state.navState === false){
      this.setState({navState: true});
    } else {
      this.setState({navState: false});
    }
  }
  render(){
    return (
      <div>
        <AppBar
          title={this.props.title}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.toggleNav.bind(this)}
          className="navbar"
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.navState}
          onRequestChange={(open) => this.setState({navState: open})}
        >
          <MenuItem className="nav-link" onTouchTap={this.handleClose}><Link to="/">Home</Link></MenuItem>
          <MenuItem className="nav-link" onTouchTap={this.handleClose}><Link to="contact">Contact</Link></MenuItem>
          <MenuItem className="nav-link" onTouchTap={this.handleClose}><a href="https://s3-us-west-2.amazonaws.com/adam-d-misc/Adam_Denny_Resume_2017.pdf">Resume</a></MenuItem>
        </Drawer>
      </div>
    )
  }
};
