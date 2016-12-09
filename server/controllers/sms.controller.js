import sms from '../models/sms';
import sanitizeHtml from 'sanitize-html';

export function sendSms(req, res) {
  if (!req.body.sendDetails.to || !req.body.sendDetails.body) {
    res.status(403).end();
  }
  console.log("inside the client0"); 
  console.log(req.body.sendDetails.to);
  //const newsms= new sms(req.body.sendDetails);

  // Let's sanitize inputs
  //newsms.to = sanitizeHtml(newsms.to);
  //newsms.body = sanitizeHtml(newsms.body);
  // Twilio Credentials 
  var accountSid = 'ACcc4295749de0db4e4e28b70294edff38'; 
  var authToken = '0f4f118ca4695551a400900a29ebf942'; 
 
  //require the Twilio module and create a REST client 
  var client = require('twilio')(accountSid, authToken); 
 
  client.messages.create({ 
    to: req.body.sendDetails.to, 
    from: " +16179817053", 
    body: req.body.sendDetails.body, 
    //mediaUrl: "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg",  
  },function(err, message) { 
    //console.log(message.sid);
    console.log("inside the client"); 
    if(message) {
      res.json({ sendDetails : 'message sent'})
    } else {
      console.log("error:",err)
    }
  });
}



