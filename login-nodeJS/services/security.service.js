const Service = require('./userServices').userServices;
const service = new Service();

function valid(rq,rs,next){
    console.log("inside valid function of security services.")
    const token = rq.headers.token;
    if(token){
        const isValid = service.validateToken(token);
        if(isValid){
            console.log("token is valid and can enter inside the home page")
            next();
        }else{
            console.log("unauthorize1")
            rs.redirect('/unauthorize');
        }
    }else{
        console.log("unauthorize2")
        rs.redirect('/unauthorize');
    }
}

module.exports = {
    validate : valid
}