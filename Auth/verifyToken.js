const jwt=require('jsonwebtoken');
const s_key=require('../config');
exports.verify_token = (req,res,next) => {
    var token = req.headers['x-access-token'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, s_key.secret, (err, decoded)=> {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      console.log('decode values are ',decoded);
      req.userId=decoded.id;
      next();
    });
    
}