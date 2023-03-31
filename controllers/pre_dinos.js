//add router configs to export back to main server (it wraps it in a module)
const express = require('express')
const router = express.Router()
const fs = require('fs')


// helper function 
const readpreDinos = () => {
    // read in the creatures json
    const creatures = fs.readFileSync("./prehistoric_creatures.json")
    // parse the raw json to js
    const predinoData = JSON.parse(pre_dinos)
    // return the dino data
    return predinoData
}
//readpreDinos()

//GET /pre_dinos --read all creatures 
router.get('/', (req,res) => {
    const creatures = readpreDinos()
    console.log(predinos)
    res.render("creatures/index.ejs", {
        creatures
    })
})


//GET /pre_dinos/new -- SHOW route(nowing is non db actions) to create creatures
router.get('/new', (req,res) => {
    res.send('SHOW prehistoric_creatires new shit')
})

//POST /pre_dinos -- intake form data from /new and create creature
router.post('/', (req,res) =>{
    console.log(req.body)
    res.send('prehistoric $$')
    const creatures = readcreatures()
    creatures.push(req.body)
    fs.writeFileSync(".prehistoric_creatures.json", JSON.stringify(creatures))
    res.redirect('/prehistoric_creatures')
})
//GET /pre_dinos/:id --- read creature @:id

router.get('/:id', (req,res) => {
    const creatures = readCreatures()
    res.render("creatures/details.ejs")
    creature: creatures[req.params.id]
    id: req.params.id
})

module.exports = router;