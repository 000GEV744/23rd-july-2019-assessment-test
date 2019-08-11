const server = require('express').Router();
const setContentHeader = require('../Services/utils').setContentHeader;
const cartProductServices = require('../Services/cartProductServices').Cartproducts;
const CPServices= new cartProductServices();
//products inside the cart
server.get('/',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        cartProducts: CPServices._all()
    }));
});

// add a new product to the Cart
server.post('/add',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        cartProducts : CPServices._add(req.body)
    }));
});
module.exports.cartRouter=server;