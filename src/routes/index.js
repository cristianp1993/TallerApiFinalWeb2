
const express = require('express')
const moviesRouter = require('./movies/movies.router')
const directorRouter = require('./director/director.router')
//const authRouter = require('./users/auth.router')

function routerMovies(app){
    const router = express.Router()
    app.use('/', router) 
    router.use('/movies', moviesRouter)
    router.get('/', (req, res) => {
        res.redirect('/movies/home')
    })
    
    router.use('/director', directorRouter)

    // router.use('/auth', authRouter)
}

module.exports = routerMovies