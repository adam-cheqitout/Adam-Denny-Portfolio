import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default class Collaboratory extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentWillMount(){
//<img src="images/collab.jpg" />
  }

  render(){
    return (
      <div className="full-page" style={{backgroundColor: 'yellow', backgroundImage: "url(images/collab.jpg)"}}>
        <div className="project-info">
          <div className="container">
            <div className="row middle-xs">
              <Card className="card col-sm-6 col-sm-offset-6" style={{boxShadow: "none"}}>
                <CardTitle title="Collaboratory" subtitle="Card subtitle" />
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
      </div>
    )
  }
};
