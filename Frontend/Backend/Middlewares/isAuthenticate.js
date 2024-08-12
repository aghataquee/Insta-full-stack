const jwt=require('jwt');
const isAuthenticate=(req,res,next)=>{
    const token=req.cookie;
    if(!token){
        res.status(400).json({
            message:"Plz Login"
        })
    }
    const decode=jwt.verify(token,'secretKey');
    req.user=decode;
    next();
}
