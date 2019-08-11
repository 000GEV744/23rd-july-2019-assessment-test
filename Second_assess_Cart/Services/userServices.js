const users=require('../Dbs/users').users;
class Users{
    constructor(){
     this.users=users;
  }

  _all(){
      return this.users;
  }
  _add(user){
    this.users.push(user);
    return this.users;
  }
}

module.exports.users=Users;