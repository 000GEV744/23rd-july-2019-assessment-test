const _users = require('../db/users').Users;
const jwt = require('jsonwebtoken');
const key = require('../keys/private').private_key;
class Users{
 constructor(){
     this.users=_users;
 }

 //showing all users
 _all(){
     return this.users;
 }

 //code to validate the user
 ValidUser(email,password){
        return this.users.find((u)=>{
            return u.email == email && u.pass == password;
        });
  }

//generating the token if user is valid 
  generateToken(user){
    const data = {
        email : user.email,
        pass : user.pass
    }
    const token = jwt.sign(data,key,{
        expiresIn : "10m"
    });
    return token;
}

//validate the token that was generated 
validateToken(token){
    let isValid = false;
    try{
        isValid = jwt.verify(token,key);
    }catch(error){
        console.error('Message: ',err);
    } finally{
        return isValid;
    }    
}
}

module.exports.userServices=Users;