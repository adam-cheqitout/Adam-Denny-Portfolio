import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default class Awards extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentWillMount(){

  }

  render(){
    return (
      <Card>
        <CardTitle title="Awards" />
      </Card>
    )
  }
};
