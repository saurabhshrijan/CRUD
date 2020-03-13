const express=require('express');
const router=express.Router();
const register_controller=require('../controllers/register_controller');
const verifyToken=require('../Auth/verifyToken');
router.post('/register',register_controller.register);

router.get('/userDetails',verifyToken.verify_token ,register_controller.getUser);


module.exports=router;