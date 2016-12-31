import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { createContainer } from 'meteor/react-meteor-data';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Header from './Header.jsx';
import Content from './Content.jsx';
import Contact from './Contact.jsx';

// App component - represents the whole app
export class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path="/" component={Content}/>
          <Route path="contact" component={Contact} />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default createContainer(() => {
  return {
    
  };
}, App);
