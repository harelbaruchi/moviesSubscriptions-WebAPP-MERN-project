const express    =   require('express')
const usersBL    =   require('../models/usersBL')
const appRouter  =   express.Router()


appRouter.route('/')
    .get(async function(req, resp) {
        let users = await usersBL.getAllUsers()
        return resp.json(users)
})

appRouter.route('/login')
    .post(async function(req, resp) {
        let users = await usersBL.getAllUsers() // needs to be optimized not with find()!! get fullname specific
        let user = users.find(x => x.username === req.body.username && x.password === req.body.password)   
        if (user) {
                return resp.json({ loggedIn: true, user: user })           
        } else {
                return resp.json({ loggedIn: false })   
        }             
        return resp.json(users)
})

appRouter.route('/:id')
    .get(async function(req, resp) {
        let id = req.params.id
        let user = await usersBL.getUser(id)
        return resp.json(user)
})

appRouter.route('/')
    .post(async function(req, resp) {
        let obj = req.body
        let result = await usersBL.addUser(obj)
        return resp.json(result)
})

appRouter.route('/:id')
    .put(async function(req, resp) {
        let obj = req.body
        let id = req.params.id
        let result = await usersBL.updateUser(id, obj)
        return resp.json(result)
})

appRouter.route('/:id')
    .delete(async function(req, resp) {
        let id = req.params.id
        let result = await usersBL.deleteUser(id)
        return resp.json(result)
}) 

module.exports = appRouter