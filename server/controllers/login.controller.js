import signup from '../models/signup';
import sanitizeHtml from 'sanitize-html';
//import serverConfig from './config';
//import jwt from 'jsonwebtoken';

export function createUser(req, res) {
  if (!req.body.users.email || !req.body.users.password) {
    res.status(403).end();
  }
  console.log("server side:",req.body.users);
   signup.findOne({
    email: req.body.email
  }, function(err, users) {

    if (err) throw err;

    if (!users) {
      res.json({users: {success: false, message: 'Authentication failed. User not found.' }});
    } else if (users) {

      // check if password matches
      if (users.password != req.body.password) {
        res.json({users: { success: false, message: 'Authentication failed. Wrong password.' }});
      } else {

        // if user is found and password is right
        // create a token
        // var token = jwt.sign(users, app.get('superSecret'), {
        //   expiresInMinutes: 1440 // expires in 24 hours
        // });

        // return the information including token as JSON
        res.json({
          users: {
            success: true,
            message: 'Enjoy your token!',
          }
       
          // token: token
        });
      }   

    }

  });
}


 


