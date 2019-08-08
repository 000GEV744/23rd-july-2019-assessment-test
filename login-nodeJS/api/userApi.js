const server=require('express').Router()
const setContentHeader = require('../services/utils').setContentHeader;
const userServices=require('../services/userServices').userServices;
const Uservices=new userServices();

server.get('/',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        users : Uservices._all()
    }));
});

server.post('/token',(req,res)=>{
        // generate token
        console.log("inside token api")
        const userExists = Uservices.ValidUser(req.body.email,req.body.pass);
        if(userExists){
            const token = Uservices.generateToken(userExists);
            res.status(200).json({
                message : 'Token Generated Successfully',
                token : token
            })
        }else{
            res.status(400).json({
                message : 'Invalid User credentials'
            });
        }
    });

module.exports.userRoutes = server;