const mongoose    =  require ('mongoose')

let   memberSchema  =  mongoose.Schema
let   MemberSchema  =  new memberSchema({
        name:         String,
        id:           String,  
        email:         String,
        city:          String    
})

module.exports = mongoose.model('members', MemberSchema)
