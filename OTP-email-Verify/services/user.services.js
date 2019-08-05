const client = require('mongodb').MongoClient;
const UserConst = require('./utils').UserConstants;
var otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');
const utils = require('./utilsEmail').utilsemail;
class Services{
    
    //defining the constructor for sending the email
    constructor(){


        this.smtpSetup = {
            service : utils.smtp.provider,
            auth :{
                user : utils.smtp.address,
                pass : utils.smtp.password
            }
        }
        // configure the smtp settings
        this.mailer = nodemailer.createTransport(this.smtpSetup);
    }

    //sending the mail
    emailforOtp(email,name,otp){
        
        this.mailer.sendMail({
            from : utils.smtp.address,
            to : email,
            subject : "One Time Password Confirmation",
            html : `<html><body>Hello !!<br><br>
            Dear ${name}, <br><br><br> 
            You've logged in at our website.<br>
            Please verify your email id by entering the given <br>
            OTP: </pre><b>${otp}<b><br><br>
            <b>Note:</b> This will be valid for 15 minutes</body></html>`,
        },(err,response)=>{
            if(err){
                console.log(err);
                return "Unable to send email";
            }else{
                console.log('Email Sent');
                return "Email Sent Successfully";
            }
        })
    }
    //defining the validity of the OTP
    validity(){
        const d = new Date()
        const validity = d.getTime()+900000
        return validity
    }

    //generating the OTP
    generateOtp(){
        let otp = otpGenerator.generate(6) 
        return otp;
    }

    //registering the user with their name, email, validity, and generated otp into the database then 
    //sending the otp to the respected email id
    register(_obj, callback){
        let oneTimePass=this.generateOtp();
        let ValidTill=this.validity();
        this.emailforOtp(_obj.email,_obj.name,oneTimePass);
        const _url = UserConst.mongo.url + UserConst.mongo.port;
        client.connect(_url,(err,conn)=>{
            const _userDetails ={
               
                name: _obj.name,//getting this from UI
                email: _obj.email,//getting this from UI
                validity: ValidTill, //defining validtill in the backend
                otp:oneTimePass//defining validtill in the backend
            }
            conn.db(UserConst.mongo.db).collection(UserConst.mongo.collections.user).insert(_userDetails,(err,res)=>{
                     callback(err,res);
            });
        });
    }

    //verifying whether the otp is valid or not with the database entries
    Verify(_otp, callback){
        const _url = UserConst.mongo.url + UserConst.mongo.port;
        client.connect(_url,(err,conn)=>{
            conn.db(UserConst.mongo.db).collection(UserConst.mongo.collections.user).find({otp:_otp}).toArray((err,res)=>{
                callback(err,res);
            });
        });
    }

    //updating the user's password if the user has eneterd the correct otp in the given time 
    Update(userData,pass, callback){
        const _url = UserConst.mongo.url + UserConst.mongo.port;
        client.connect(_url,(err,conn)=>{
            const _userData ={
               
                name: userData.name,  
                email: userData.email,
               password:pass        

            }
            conn.db(UserConst.mongo.db).collection(UserConst.mongo.collections.user).update({otp:userData.otp},{$set:_userData},(err,res)=>{
                callback(err,res);
            });
        });   
    }

    // deleting the user from the database if he/she has enetered the otp after it's
    // valid time, so that on resending the otp same user should on not be there in db
    DeleteAlreayExistUser(name, email, callback){
        const _url = UserConst.mongo.url + UserConst.mongo.port;
        client.connect(_url,(err,conn)=>{
            conn.db(UserConst.mongo.db).collection(UserConst.mongo.collections.user).deleteOne({name:name, email:email},(err, res)=>{
                             callback(err, res)
            });
        });

    }
}


module.exports={
    Services
}