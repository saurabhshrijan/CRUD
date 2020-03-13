exports.logout=(req,res,next)=>{
    //the logout functionality could be done at client side by destroying token in localstorage
    res.status(200).send({auth:false,token:null});
}