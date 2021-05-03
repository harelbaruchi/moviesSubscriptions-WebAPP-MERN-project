const Member = require('../models/memberModel')

exports.getAllMembers = function() {
    return new Promise((resolve, reject) => {
        Member.find({}, function(err, membersData) {
            if (err) {
                reject(err)
            } else {
                resolve(membersData)
            }
        })
    })
}

exports.getMember = function(id) {
    return new Promise((resolve, reject) => {
        Member.findById(id, function(err, memberData) {
            if (err) {
                reject(err)
            } else {
                resolve(memberData)
            }
        })
    })
}

exports.addMember = function(memberNew) {
    return new Promise((resolve, reject) => {
        let newMember = new Member ({
            _id:        memberNew._id,
            email:      memberNew.email,
            city:       memberNew.city
        })
        newMember.save(function(err) {
            if(err) {
                reject(err)
            } else {
                resolve('Created !')
            }
        })
    })
}

exports.updateMember = function(id, memberNew) {
    return new Promise((resolve, reject) => {
        Member.findByIdAndUpdate(id, {
            email:      memberNew.email,
            city:       memberNew.city      
        }, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Updated !')
            }
        })
    })
}

exports.deleteMember = function(id) {
    return new Promise((resolve, reject) => {
        Member.findByIdAndDelete(id, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Deleted !')
            }
        })
    })
}

