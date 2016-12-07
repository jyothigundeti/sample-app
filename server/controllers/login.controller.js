import sanitizeHtml from 'sanitize-html';

export function createUser(req, res) {
  if (!req.body.users.email || !req.body.users.password ||) {
    res.status(403).end();
  }

  // const newlogin= new login(req.body.users);

  // // Let's sanitize inputs
  // newlogin.email = sanitizeHtml(newlogin.email);
  // newlogin.password = sanitizeHtml(newlogin.password);

  // newlogin.findOne((err, saved) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   }
  //   res.json({ users: saved });
  // });
   signup.findOne({
    email: req.body.email
  }, function(err, users) {

    if (err) throw err;

    if (!users) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (users) {

      // check if password matches
      if (users.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(users, app.get('superSecret'), {
          expiresInMinutes: 1440 // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }   

    }

  });
}


 


