const Subscription = require('../models/subscriptionModel')

exports.getAllSubscriptions = function() {
    return new Promise((resolve, reject) => {
        Subscription.find({}, function(err, subscriptionsData) {
            if (err) {
                reject(err)
            } else {
                resolve(subscriptionsData)
            }
        })
    })
}

exports.getSubscription = function(id) {
    return new Promise((resolve, reject) => {
        Subscription.findById(id, function(err, subscriptionData) {
            if (err) {
                reject(err)
            } else {
                resolve(subscriptionData)
            }
        })
    })
}

exports.addSubscription = function(subscriptionNew) {
    return new Promise((resolve, reject) => {
        let newSubscription = new Subscription ({
            _id:        subscriptionNew._id,
            movieid:    subscriptionNew.movieid,
            memberid:   subscriptionNew.memberid,
            date:       subscriptionNew.date
        })
        newSubscription.save(function(err) {
            if(err) {
                reject(err)
            } else {
                resolve('Created !')
            }
        })
    })
}

exports.updateSubscription = function(id, subscriptionNew) {
    return new Promise((resolve, reject) => {
        Subscription.findByIdAndUpdate(id, {
            movieid:    subscriptionNew.movieid,
            memberid:   subscriptionNew.memberid,
            date:       subscriptionNew.date      
        }, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Updated !')
            }
        })
    })
}

exports.deleteSubscription = function(id) {
    return new Promise((resolve, reject) => {
        Subscription.findByIdAndDelete(id, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Deleted !')
            }
        })
    })
}
