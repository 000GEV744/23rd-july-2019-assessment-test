const server = require('express').Router();
const productServices=require('../Services/ProductServices').products;
const PServices = new productServices();
const setContentHeader = require('../Services/utils').setContentHeader;

server.get('/',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        products : PServices._all()
    }));
});

module.exports.productRoutes = server;