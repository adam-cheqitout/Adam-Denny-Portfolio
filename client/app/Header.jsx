import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      navState: false
    }
  }
  componentWillMount(){
    console.log(this.props.title);
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
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
};
