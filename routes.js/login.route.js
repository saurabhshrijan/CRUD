const express=require('express');
const router=express.Router();
const login_controller=require('../controllers/login_controller');

router.post('/login',login_controller.login);


module.exports =router;