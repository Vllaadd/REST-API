const express = require('express')
const router = express.Router()

//Getting All 
router.get('/', (req, res) => {
    res.send('This is for getting all');
})
//Getting One
router.get('/:id', (req, res) =>{

})
//Creating One 
router.post('/:id', (req, res) =>{
    
})
//Updating One 
router.patch('/', (req, res) => {

})
//Deleting One
router.delete('/:id', (req, res)=>{

})

module.exports = router