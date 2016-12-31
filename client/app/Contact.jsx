import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      emailInvalid: "",
      messageInvalid: "",
      captchaRes: "",
      emailSuccess: false,
      emailFailure: false
    }
  }
  emailValid(str){
    return str.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  }
  checkEmail(email){
    if(this.emailValid(email)){
      this.setState({emailInvalid: ""});
    } else {
      this.setState({emailInvalid: "Please enter a valid email address"});
    }
  }
  submitForm(event){
    event.preventDefault();
    let { email, message } = event.target;
    if(!email.value){
      return this.setState({emailInvalid: "Please enter a valid email address"});
    }
    if(!this.emailValid(email.value)){
      return this.setState({emailInvalid: "Email format invalid"});
    }
    if(!message.value){
      return this.setState({messageInvalid: "Please enter a message"});
    }
    Meteor.call('sendContact', email.value, message.value, this.state.captchaRes, (e,s) => {
      if(e){
        this.setState({emailFailure: true});
      } else {
        this.setState({emailSuccess: true});
        document.getElementsByClassName('contact-form')[0].reset();
      }
    });
  }
  componentDidMount(){
    grecaptcha.render("captcha", {'sitekey' : '6LcDIxAUAAAAAIAramARcy6oSOaRqvrM3WnVNa2S', 'callback': this.getCaptcha.bind(this)});
  }
  getCaptcha(e){
    this.setState({captchaRes: e});
  }
  handleClose(){
    this.setState({emailSuccess: false, emailFailure: false});
  }
  render(){
    return (
      <div>
        <Header title="Adam Denny"/>
          <div className="full-page" style={{backgroundColor: 'gray', backgroundImage: "url(https://s3-us-west-2.amazonaws.com/adam-d-misc/background.jpg)"}}>
            <Card className="col-md-6" style={{alignSelf: 'center'}}>
              <form className="contact-form" onSubmit={this.submitForm.bind(this)}>
                <CardTitle
                  title="Contact"
                  subtitle="Send Adam an Email"
                />
              <CardText>
                <TextField
                  hintText="Your Email"
                  floatingLabelText="Enter Your Email"
                  name="email"
                  onBlur={(e) => this.checkEmail(e.target.value)}
                  fullWidth={true}
                  errorText={this.state.emailInvalid}
                />
                <TextField
                  hintText="Your Message"
                  name="message"
                  floatingLabelText="Enter Your Message"
                  multiLine={true}
                  fullWidth={true}
                  rows={3}
                  errorText={this.state.messageInvalid}
                />
              <div className="g-recaptcha" id="captcha" data-sitekey="6LcDIxAUAAAAAIAramARcy6oSOaRqvrM3WnVNa2S"></div>
                </CardText>
                <CardActions>
                  <FlatButton type="submit" label="Send" primary={true} />
                </CardActions>
              </form>
            </Card>
          </div>
          <Dialog
            title="Email Sent"
            actions={
              <FlatButton
                label="Okay"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose.bind(this)}
              />
            }
            modal={false}
            open={this.state.emailSuccess}
            onRequestClose={this.handleClose.bind(this)}
          >
            Email successfully sent! Adam will get back to you as soon as possible.
          </Dialog>
          <Dialog
            title="Email Failed"
            actions={
              <FlatButton
                label="Okay"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose.bind(this)}
              />
            }
            modal={false}
            open={this.state.emailFailure}
            onRequestClose={this.handleClose.bind(this)}
          >
            Something went wrong! Did you check your recaptcha?
          </Dialog>
          <Footer />
      </div>
    )
  }
};
