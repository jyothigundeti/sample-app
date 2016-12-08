import signup from '../models/signup';
import sanitizeHtml from 'sanitize-html';
import serverConfig from '../config';
import jwt from 'jsonwebtoken';

export function createUser(req, res) {
  
  console.log("server side:",req.body.users);
   
 signup.findOne({email: req.body.users.email}).exec((err,users) => {
      //console.log("users",users);
    if (err) {
      res.status(500).send(err);
    }
    if(!users) {
        res.json({users:{ success: false, message: 'Authentication failed. User not found.'}});
     } else if (users) {
         if (users.Password != req.body.users.Password){
             res.json ({users:{sucess:false, message:'Authentication failed'}});
         }else{
             console.log("get a token is :",serverConfig.secret);
        var token = jwt.sign(users,serverConfig.secret);
             res.json({users:{ 
                 success:true,
                 message:'Enjoy your token',
                 token:token
             }
             
             });
         }
     }


  
  });
    
 }


