const mongoose      =  require ('mongoose')

let   subscriptionSchema  =  mongoose.Schema
let   SubscriptionSchema  =  new subscriptionSchema({
        id:              String,  
        movieid:         String,
        memberid:        String,
        date:            String  
})

module.exports = mongoose.model('subscriptions', SubscriptionSchema)