var jwt = require("jsonwebtoken");
module.exports=(Req, Res, Next)=>{
    let Token = Req.headers['token'];
    jwt.verify(Token, "SecretKey123456789", function (error, decoded){
        if(error){
            console.log(Token)
            Res.status(401).json({status:"Unauthorized"})
        }else{
            let email=decoded['data'];
            console.log(email);
            Req.headers.email=email;
            Next();
        }
    })
}