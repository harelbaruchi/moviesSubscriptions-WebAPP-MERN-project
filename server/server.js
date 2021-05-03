const express = require('express')
const app = express()

var cors = require('cors')

app.use(express.urlencoded()) //Parse URL-encoded bodies 
app.use(express.json()) //Used to parse JSON bodies 

require('./configs/database')
//const cors = require('cors')
app.use(cors())

const usersController         =  require('./controllers/usersController')
const moviesController        =  require('./controllers/moviesController')
const membersController       =  require('./controllers/membersController')
const subscriptionsController =  require('./controllers/subscriptionsController')

app.use('/api/users',  usersController)
app.use('/api/movies', moviesController)
app.use('/api/members', membersController)
app.use('/api/subscriptions', subscriptionsController)

app.listen(8000)