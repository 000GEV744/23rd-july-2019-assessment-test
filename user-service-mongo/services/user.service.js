const MongoClient = require('mongodb').MongoClient;
const UserConstants = require('../utils/utils').UserConstants; 
class UserService {

    fetchUsers(callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            conn.db(UserConstants.mongo.db).collection('users').find({}).toArray((error,users)=>{
                if(!error){
                    console.log(users);
                    callback(users);
                }
            });
        });
    }
    
    add(_user,callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            conn.db(UserConstants.mongo.db).collection('users').insert(_user,(err,response)=>{
                callback(err,response);
            });
        });
    }

    //to update
    update(obj,callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            console.log(obj.key)
            console.log(obj.newValue)
            //console.log(str);
            conn.db(UserConstants.mongo.db).collection('users').updateOne(obj.key,
                { $set :  obj.newValue },(err,response)=>{
                callback(err,response);
            });
        });
    }
    delete(obj, callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            //console.log(obj.key)
            conn.db(UserConstants.mongo.db).collection('users').remove(obj.key,
                (err,response)=>{
                callback(err,response);
            });
        });
    }
}

module.exports = {
    UserService
}