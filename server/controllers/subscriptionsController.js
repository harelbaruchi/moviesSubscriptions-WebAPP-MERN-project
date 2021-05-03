const express           =   require('express')
const subscriptionsBL   =   require('../models/subscriptionsBL')
const appRouter         =   express.Router()
 

appRouter.route('/')
    .get(async function(req, resp) {
        let subscriptions = await subscriptionsBL.getAllSubscriptions()
        return resp.json(subscriptions)
})

appRouter.route('/:id')
    .get(async function(req, resp) {
        let id = req.params.id
        let subscription = await subscriptionsBL.getSubscription(id)
        return resp.json(subscription)
})

appRouter.route('/')
    .post(async function(req, resp) {
        let obj = req.body
        let result = await subscriptionsBL.addSubscription(obj)
        return resp.json(result)
})

appRouter.route('/:id')
    .put(async function(req, resp) {
        let obj = req.body
        let id = req.params.id
        let result = await subscriptionsBL.updateSubscription(id, obj)
        return resp.json(result)
})

appRouter.route('/:id')
    .delete(async function(req, resp) {
        let id = req.params.id
        let result = await subscriptionsBL.deleteSubscription(id)
        return resp.json(result)
}) 

module.exports = appRouter