const Movie = require('../models/movieModel')

exports.getAllMovies = function() {
    return new Promise((resolve, reject) => {
        Movie.find({}, function(err, moviesData) {
            if (err) {
                reject(err)
            } else {
                resolve(moviesData)
            }
        })
    })
}

exports.getMovie = function(id) {
    return new Promise((resolve, reject) => {
        Movie.findById(id, function(err, movieData) {
            if (err) {
                reject(err)
            } else {
                resolve(movieData)
            }
        })
    })
}

exports.addMovie = function(movieNew) {
    return new Promise((resolve, reject) => {
        let newMovie = new Movie ({
            _id:              movieNew._id,
            name:             movieNew.name,
            yearpremiered:    movieNew.yearpremiered,
            genres:           movieNew.genres,
            imageurl:         movieNew.imageurl
        })
        newMovie.save(function(err) {
            if(err) {
                reject(err)
            } else {
                resolve('Created !')
            }
        })
    })
}

exports.updateMovie = function(id, movieNew) {
    return new Promise((resolve, reject) => {
        Movie.findByIdAndUpdate(id, {
            name:             movieNew.name,
            yearpremiered:    movieNew.yearpremiered,
            genres:           movieNew.genres, 
            imageurl:         movieNew.imageurl   
        }, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Updated !')
            }
        })
    })
}

exports.deleteMovie = function(id) {
    return new Promise((resolve, reject) => {
        Movie.findByIdAndDelete(id, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Deleted !')
            }
        })
    })
}

