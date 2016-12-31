import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
var Future = Npm.require('fibers/future');

Meteor.methods({
  'sendContact': (from, message, token) => {

    var future = new Future();
    var data = {
      secret: process.env.CAPTCHA_TOKEN,
      response: token
    };
    HTTP.call("POST", "https://www.google.com/recaptcha/api/siteverify", {params: data}, (e,s) => {
      if(e){
        future.throw("Please check that you are not a robot.");
      } else if(s.data.success) {
        Email.send({
          from: from,
          to: 'adam.m.denny@gmail.com',
          subject: 'Site Contact',
          text: message
        });
        future.return(s);
      } else {
        future.throw("Please check that you are not a robot.");
      }
    });

    return future.wait();
  }
});
