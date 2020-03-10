const express=require('express');
const router=express.Router();
const register_controller=require('../controllers/register_controller');

router.post('/register',register_controller.register);

router.get('/me', register_controller.verify_token);


module.exports=router;