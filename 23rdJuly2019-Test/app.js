const express = require('express');
const server = express();
const parser = require('body-parser');
const cors = require('cors');
const productsRoutes=require('./Apis/productsApi').productRoutes;
const userRoutes=require('./Apis/UsersApi').userRoutes;
const setContentHeader = require('./services/utils').setContentHeader;
const cartRoutes = require('./Apis/CartProductApi').cartRouter;
const Email = require('./services/emailServices').Email;
const emailService = new Email();


//apply body-parser
server.use(parser.json());
// apply cors
server.use(cors());

server.post('/email',(rq,rs)=>{
    setContentHeader(rs);
    console.log(rq.body);
    emailService.emailWithAttachment(rq.body);
    rs.status(200).json({
        message : 'Service is running'
    });
});

server.get('/status',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        message: "Server is RUNNING"
    }));
});

//// add routes to server
server.use('/products',productsRoutes);
server.use('/users',userRoutes);
server.use('/cart',cartRoutes);

// PORT Binding
server.listen(1264,()=>{
    console.log('Server started at 1264');
});