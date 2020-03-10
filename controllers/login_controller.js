const jwt=require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const s_key=require('../config');
const User=require('../model/user');
exports.login=(req,res,next)=>{

        User.findOne({ email: req.body.email }, function (err, user) {
          if (err) return res.status(500).send('Error on the server.');
          if (!user) return res.status(404).send('No user found.');
          
          let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
          if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
          
          var token = jwt.sign({ id: user._id }, s_key.secret, {
            expiresIn: 86400 // expires in 24 hours
          });
          
          res.status(200).send({ auth: true, token: token });
        });
        
      
    }
