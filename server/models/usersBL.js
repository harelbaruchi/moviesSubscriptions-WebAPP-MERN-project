const User = require('../models/userModel')

exports.getAllUsers = function() {
    return new Promise((resolve, reject) => {
        User.find({}, function(err, usersData) {
            if (err) {
                reject(err)
            } else {
                resolve(usersData)
            }
        })
    })
}

exports.getUser = function(id) {
    return new Promise((resolve, reject) => {
        User.findById(id, function(err, userData) {
            if (err) {
                reject(err)
            } else {
                resolve(userData)
            }
        })
    })
}

exports.addUser = function(userNew) {
    return new Promise((resolve, reject) => {
        let newUser = new User ({
            _id:         userNew._id,
            fullname:    userNew.fullname,
            username:    userNew.username,
            password:    userNew.password
        })
        newUser.save(function(err) {
            if(err) {
                reject(err)
            } else {
                resolve('Created !')
            }
        })
    })
}

exports.updateUser = function(id, userNew) {
    return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(id, {
            fullname:    userNew.fullname,
            username:    userNew.username,
            password:    userNew.password      
        }, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Updated !')
            }
        })
    })
}

exports.deleteUser = function(id) {
    return new Promise((resolve, reject) => {
        User.findByIdAndDelete(id, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Deleted !')
            }
        })
    })
}

