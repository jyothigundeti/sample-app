import signup from '../models/signup';
import sanitizeHtml from 'sanitize-html';

export function addUser(req, res) {
  if (!req.body.userDetails.fname || !req.body.userDetails.lname || !req.body.userDetails.email || !req.body.userDetails.password || !req.body.userDetails.mobile) {
    res.status(403).end();
  }

  const newsignup= new signup(req.body.userDetails);

  // Let's sanitize inputs
  newsignup.fname = sanitizeHtml(newsignup.fname);
  newsignup.lname = sanitizeHtml(newsignup.lname);
  newsignup.email = sanitizeHtml(newsignup.email);
  newsignup.password = sanitizeHtml(newsignup.password);
  newsignup.mobile = sanitizeHtml(newsignup.mobile);
  console.log('email id:',newsignup.email );
  newsignup.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ userDetails: saved });
  });
}



