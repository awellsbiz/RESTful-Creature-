// required packages
const express = require('express')
const fs = require('fs')

// app config
const app = express()
const PORT = 8000
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))

//middleware for controllers --- configerate them w/ use
app.use('/dinosaurs', require('./controllers/dinosaurs'))
app.use('/pre_dinos', require('./controllers/pre_dinos'))

// helper function to read the dino db
const readDinos = () => {
    // use the filesystem to read the dino json
    const dinosaurs = fs.readFileSync("./dinosaurs.json")
    // parse the raw json to js
    const dinoData = JSON.parse(dinosaurs)
    // return the dino data
    return dinoData
}

//readDinos()

// routes
// GET / -- index show route for the app
app.get('/', (req, res) => {
    res.render("index.ejs")
})


// PREHISTOTIC ROUTES DELIVERABLE


// listen on a port
app.listen(PORT, () => {
    console.log(`is that RESTful dinos I hear? on port ${PORT} 🦕`)
})