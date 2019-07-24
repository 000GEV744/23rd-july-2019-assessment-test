const server = require('express').Router();
const userServices=require('../Services/userServices').users;
const UServices = new userServices();
const setContentHeader = require('../Services/utils').setContentHeader;

server.get('/',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        users : UServices._all()
    }));
});

server.post('/add',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        users : UServices._add(req.body)
    }));
});

module.exports.userRoutes = server;