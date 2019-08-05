const express = require('express');
const server = express();
const parser = require('body-parser');
const cors = require('cors');
const UserApi = require('./apis/UserApi').userRoute;

server.use(parser.json())
server.use(cors());

 server.use('/user',UserApi);

server.get('/status', (rq,rs)=>{
    console.log("inside status")
  rs.status(200).json({
      message: "server is running"
  });
})

//binding the port
const PORT= 44786;
server.listen(PORT,()=>{
    console.log(`server is started at ${PORT}`);
})