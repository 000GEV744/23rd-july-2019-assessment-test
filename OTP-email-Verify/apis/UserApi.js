const server = require('express').Router();
const UServices=require('../services/user.services').Services
const _UServices=new UServices();

server.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message: 'user servcies started'
    });
});

server.post('/RegisterUser',(rq,rs)=>{
    console.log("inside register")
    _UServices.register(rq.body,(err,data)=>{
        if(err){
            rs.status(400).json({
                message:"couldn't register"
            });
        }else{
            rs.status(200).json({
                 message:'email sent and id, email, name are saved',
                data:data
            });
        }
    })  
})

server.post('/VerifyOtp',(rq,rs)=>{
    _UServices.Verify(rq.body.otp,(err,data)=>{
        if(err){
            rs.status(400).json({
                message:"worng OTP"
            });
        }else
        {
            if(data.length>0)
        
            {   const d = new Date()
                const IsValid = d.getTime()
               
                if(data[0].validity > IsValid && rq.body.password==rq.body.Confirm_password){
                     console.log(data[0])
                    _UServices.Update(data[0],rq.body.password,(err,data)=>{
                       if(err){
                        rs.status(400).json({
                            message:"Some Error occured !!"
                        });
                       }else{
                        rs.status(200).json({
                            message:'User is registered',
                            data: data
                            });
                       }
                    })
                    
                
                }else{

                    _UServices.DeleteAlreayExistUser(rq.body.name,rq.body.email,(err,res)=>{
                          if(err){
                            rs.status(400).json({
                                message:"user not deleted",
                                });
                          }else{
                            rs.status(200).json({
                                message:"Request User Time Out or passwords didn't match and user deleted",
                                url: ""
                                });
                          }
                    });
                    
                }
            }
            else {
                rs.status(400).json({
                    message:"worng OTP"
                });
            }
            
        }
    });
})


// **********---------------just for practice------------************

// server.post('/first',(rq,rs,next)=>{
//     console.log("inside first")
//     rs.redirect(307,'http://localhost:44786/user/next');
//     //next();
// })

// server.post('/next',(rq,rs)=>{
//     console.log("inside Next");
//     //rs.redirect('/next');
//     rs.json({
//         message : "Next"
//     });
// })

module.exports.userRoute = server