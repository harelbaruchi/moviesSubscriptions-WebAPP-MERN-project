const mongoose    =  require ('mongoose')

let   movieSchema  =  mongoose.Schema
let   MovieSchema  =  new movieSchema({
        id:               String,  
        name:             String,
        yearpremiered:    String,////yearpremiered
        genres:          [String],
        imageurl:         String       
})

module.exports = mongoose.model('movies', MovieSchema)