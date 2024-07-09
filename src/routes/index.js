
const express = require('express')
const moviesRouter = require('./movies/movies.router')
//const authRouter = require('./users/auth.router')

function routerMovies(app){
    const router = express.Router()
    app.use('/', router) 
    router.use('/movies', moviesRouter)
    // router.use('/api/v1/files/todos', todosFilesRouter)
    // router.use('/api/v1/todos', todosApiRouter)
    // router.use('/auth', authRouter)
}

module.exports = routerMovies