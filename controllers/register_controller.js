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

exports.getUser=(req,res,next)=>{
      
    User.findById(req.userId,{password:0}, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
        //next(user);
      }); 
}