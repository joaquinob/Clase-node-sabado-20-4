const express = require('express');
const router = express.Router();

const { addPet, selectPet, selectOnePet, updatePet, deletePet } = require('../controllers/pet.controller')

router.post('/add', addPet);
router.get('/select', selectPet);
router.get('/selectPet/:id', selectOnePet);
router.put('/update/:id', updatePet);
router.delete('/delete/:id', deletePet)

module.exports = router;