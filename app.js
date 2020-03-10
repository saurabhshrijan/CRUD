const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const db=require('./model/db');
const PORT=8080;
const loginRout=require('./routes.js/login.route');
const registerRoute=require('./routes.js/register.route');
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


app.get('/',(req,res,next)=>{
    res.status(200).json({"messege":"default page"});
});

app.post('/register',registerRoute);
app.get('/me',registerRoute);
app.post('/login',loginRout);


app.get('')



app.listen(PORT,(error)=>{
    if(!error){
        console.log('server has started on port ',PORT);
    }
    else{
        console.log('error is ',error);
    }
})