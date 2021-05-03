const express     =    require('express')
const moviesBL    =    require('../models/moviesBL')
const appRouter   =    express.Router()
 

appRouter.route('/')
    .get(async function(req, resp) {
        let movies = await moviesBL.getAllMovies()
        return resp.json(movies)
})

// appRouter.route('/login')
//     .post(async function(req, resp) {
//         let users = await usersBL.getAllUsers() // needs to be optimized not with find()!! get fullname specific
//         let user = users.find(x => x.username === req.body.username && x.password === req.body.password)   
//         if (user) {
//                 return resp.json({ loggedIn: true, user: user })           
//         } else {
//                 return resp.json({ loggedIn: false })   
//         }             
//         return resp.json(users)
// })

appRouter.route('/:id')
    .get(async function(req, resp) {
        let id = req.params.id
        let movie = await moviesBL.getMovie(id)
        return resp.json(movie)
})

appRouter.route('/')
    .post(async function(req, resp) {
        let obj = req.body
        let result = await moviesBL.addMovie(obj)
        return resp.json(result)
})

appRouter.route('/:id')
    .put(async function(req, resp) {
        let obj = req.body
        let id = req.params.id
        let result = await moviesBL.updateMovie(id, obj)
        return resp.json(result)
})

appRouter.route('/:id')
    .delete(async function(req, resp) {
        let id = req.params.id
        let result = await moviesBL.deleteMovie(id)
        return resp.json(result)
}) 

module.exports = appRouter