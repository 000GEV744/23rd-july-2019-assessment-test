const express = require('express');
const server = express();
const parser = require('body-parser');
const cors = require('cors');
const userRoutes=require('./api/userApi').userRoutes;
const setContentHeader = require('./services/utils').setContentHeader;
const validate=require('./services/security.service').validate;

//apply body-parser
server.use(parser.json());  
// apply cors
server.use(cors());

//get status of server
server.get('/status',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        message: "Server is RUNNING"
    }));
});

//if its unauthorized access
server.get('/unauthorize',(rq,rs)=>{
    rs.status(401).json({
        message : 'Unauthorized Access'
    });
});

server.use('/validate',(rq,rs,next)=>{
    console.log("inside app.js for validation of token")
    validate(rq,rs,next);
});

server.get('/validate',(req,rs)=>{
    rs.json({
        message : "user is valid"
    })
});

server.use('/users',userRoutes);

// PORT Binding
server.listen(11111,()=>{
    console.log('Server started at 11111');
});