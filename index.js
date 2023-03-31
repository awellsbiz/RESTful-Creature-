// required packages
const express = require('express')


// app config
const app = express()
const PORT = 8000
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))


//middleware for controllers --- configerate them w/ use
app.use('/dinosaurs', require('./controllers/dinosaurs'))
app.use('/pre_dinos', require('./controllers/pre_dinos'))
// routes
// GET / -- index show route for the app
app.get('/', (req, res) => {
    res.render("index.ejs")
})
// listen on a port
app.listen(PORT, () => {
    console.log(`is that RESTful dinos I hear? on port ${PORT} 🦕`)
})