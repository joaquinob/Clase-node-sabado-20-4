const Pet = require('../models/pet.model')

//CRUD : Create, Read, Update, Delete

const addPet = async (req, res) => {
    const newPet = new Pet(req.body);
    const findPet = await Pet.find({name: req.body.name});
    if(findPet.length !== 0){
        return res.json({message: 'Ya existe un perrete con ese nombre'})
    };
    const createdPet = await newPet.save();
    return res.json(createdPet);
};
const selectPet = async (req, res) => {
    try {
        const pets = await Pet.find();
        return res.status(200).json(pets);
    } catch (error) {
        console.log(error);
        return res.status(500).json();
    }
};
const selectOnePet = async (req, res) => {
    try {
        const {id} = req.params;
        const pet = await Pet.findOne({_id: id});
        return res.status(200).json(pet);
    } catch (error) {
        console.log(error);
        return res.status(500).json();
    }
};
const updatePet = async (req, res) => {
    try {
        const {id} = req.params;
        const petBody = new Pet(req.body);
        petBody._id = id;
        const updatedPet = await Pet.findByIdAndUpdate(id, petBody, {new: true});

        if(!updatedPet){
            return res.status(404).json({message: 'No existe mascota con ese id'});
        }

        return res.status(200).json(updatedPet);
    } catch (error) {
        console.log(error);
        return res.status(500).json();
    }
};
const deletePet = async (req, res) => {
    try {
        const id = req.params.id;
        const deletePet = await Pet.findByIdAndDelete(id);
        if (!deletePet) {
            return res.status(404).json({ message: "Mascota no existe" })
        }
        return res.status(200).json(deletePet)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
};

module.exports = { addPet, selectPet, selectOnePet, updatePet, deletePet };