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

  render(){
    return (
      <div className="full-page" style={{backgroundColor: 'orange'}}>
        <div className="container">
          <div className="row middle-xs">
            <Card className="card col-sm-6 col-sm-offset-6">
              <CardTitle title="CheQitout" subtitle="Card subtitle" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    )
  }
};
