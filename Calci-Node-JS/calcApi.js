server=require('express').Router();
CalculatorServices=require('./calcServices').CalculatorServices
CServices=new CalculatorServices();
const setContentHeader = require('./utils').setContentHeader;

//add two numbers
server.post('/add',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        result:CServices._add(req.body)
    }));
});

//subtract two numbers
server.post('/sub',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        result:CServices._sub(req.body)
    }));
});

//multiply two numbers
server.post('/mul',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        result:CServices._mul(req.body)
    }));
});

//divide two numbers
server.post('/div',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        result:CServices._div(req.body)
    }));
});

//pow function api
server.post('/pow',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        result:CServices._pow(req.body)
    }));
});

//squareroot api
server.post('/sqrt',(req,res)=>{
    setContentHeader(res);
    //console.log(req.body.num1)
    res.end(JSON.stringify({
        result:CServices._sqrt(req.body.num1)
    }));
});

module.exports.CalcRouter=server