//add router configs to export back to main server (it wraps it in a module)
const express = require('express')
const router = express.Router()
const fs = require('fs')

//helper function
// helper function to read the dino db
const readDinos = () => {
    // use the filesystem to read the dino json
    
    const dinosaurs = fs.readFileSync("./dinosaurs.json")
    // parse the raw json to js
    const dinoData = JSON.parse(dinosaurs)
    // return the dino data
    return dinoData
}

// GET /dinosaurs -- READ return an array of dinos
router.get('/', (req, res) => {
    let dinos = readDinos()
    console.log(req.query)

    //if the user has searched, filter the dinos array
    if(req.query.dinoFilter) {
        dinos = dinos.filter(dino => {
            //compare lower case strings to case insensitivity
            console.log(dino)
            return dino.name.toLowerCase().includes(req.query.dinoFilter.toLowerCase())
        })
    }
    res.render("dinos/index.ejs", {
        // equal to { dinos: dinos }
        dinos
    })
})

// GET /dinosuars/new -- show route for a form that posts to POST /dinosaurs
router.get('/new', (req, res) => {
    res.render("dinos/new.ejs")
})

// POST /dinosaurs -- CREATE a new dino in the db
router.post('/', (req, res) => {
    console.log(req.body)//POST from data shows up in req.body
    const dinos = readDinos() 
    //push the dino from req.body into the array of dinos
    dinos.push(req.body)
    //write the json file to save to disk
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinos))
    //tell the browser to redirect
    //do another GET request on a specific url
    res.redirect('/dinosaurs')
    res.send('CREATE a new dino!')
})

// GET /dinosaurs/:id -- READ a single dino @ :id
router.get('/:id', (req, res) => {
    //read json data
    const dinos = readDinos()
    //look up one dino using req.params
    const foundDino =dinos[req.params.id]
    //render the details template
    res.render("dinos/details.ejs", {
        dino: foundDino,
        id: req.params.id
    })
    res.send('show details about dino id: ' + req.params.id)
})

module.exports = router;