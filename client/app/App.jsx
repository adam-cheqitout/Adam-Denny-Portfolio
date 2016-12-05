import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Locations } from '../../collections/locations.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Header from './Header.jsx';
import Content from './Content.jsx';

// App component - represents the whole app
export class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header title="Adam Denny" />
          <Content />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default createContainer(() => {
  return {
    locations: Locations.find({}).fetch(),
  };
}, App);
