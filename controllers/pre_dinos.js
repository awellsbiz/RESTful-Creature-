//add router configs to export back to main server (it wraps it in a module)
const express = require('express')
const router = express.Router()

//GET /pre_dinos
router.get('/', (req,res) => {
    res.send("index")
})

//GET /pre_dinos/1

router.get('/1', (req,res) => {
    res.send("ayye")
})

//GET /pre_dinos/new
router.get('/new', (req,res) => {
    res.send('prehistoric_creatires new shit')
})

//POST /pre_dinos
router.get('/pre_dinos', (req,res) =>{
    res.send('prehistoric $$')
})

module.exports = router;