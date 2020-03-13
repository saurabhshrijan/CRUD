const s_key=require('../config');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const User=require('../model/user');
exports.register=(req,res,next)=>{
const hashedPassword=bcrypt.hashSync(req.body.password,8);
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword
    },
    (error,User)=>{
        if(error) {
            console.log('allo',error);
            return res.status(500).json({"messege":"problem in registering user"})
        };
        console.log('user created in database details are ',User);
        //create token for the user
        const token=jwt.sign({ id: User._id },s_key.secret,{
            expiresIn:86400 //expieres in 24 hrs
    });
    console.log(token);
    res.status(200).send({ auth: true, token: token });
    });
   
}

exports.verify_token=(req,res,next)=>{
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, s_key.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      console.log('decode values are ',decoded)
      res.status(200).send(decoded);
      //finding user with our id we get back form token verification
    //   User.findById(decoded.id, function (err, user) {
    //     if (err) return res.status(500).send("There was a problem finding the user.");
    //     if (!user) return res.status(404).send("No user found.");
        
    //     res.status(200).send(user);
    //   });

    });
  
}