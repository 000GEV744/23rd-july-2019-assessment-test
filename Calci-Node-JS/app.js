const express = require('express');
const server = express();
const parser = require('body-parser');
const cors = require('cors');
const setContentHeader = require('./utils').setContentHeader;
const CalcRoutes = require('./calcApi').CalcRouter;
//apply body-parser
server.use(parser.json());
// apply cors
server.use(cors());

//to get the status of my server
server.get('/status',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        message: "Server is RUNNING"
    }));
});
 
server.use('/calculator',CalcRoutes); //calling the calculator API

// PORT Binding
server.listen(1269,()=>{
    console.log('Server started at 1269');
});