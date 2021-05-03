const mongoose    =  require ('mongoose')

let   userSchema  =  mongoose.Schema
let   UserSchema  =  new userSchema({      
        id:          String,
        fullname:    String,
        username:    String,
        password:    String       
})

module.exports = mongoose.model('users', UserSchema)