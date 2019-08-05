const UserConstants = {
    mongo: {
        url : 'mongodb://localhost:',
        port : 27017,
        db : 'usersOtpData',
        collections: {
            user : 'user',
        }
    },
   
}

module.exports = {
    UserConstants
}