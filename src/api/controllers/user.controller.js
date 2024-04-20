const User = require('../models/user.model')

//CRUD : Create, Read, Update, Delete

const addUser = async (req, res) => {
    const newUser = new User(req.body);
    const findUser = await User.find({name: req.body.name});
    if(findUser.length !== 0){
        return res.json({message: 'Ya existe un user con ese nombre'})
    };
    const createdUser = await newUser.save();
    return res.json(createdUser);
};
const selectUser = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json();
    }
};
const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const userBody = new User (req.body);
        userBody._id = id;
        const updatedUser = await User.findByIdAndUpdate(id, UserBody, {new: true});

        if(!updatedUser){
            return res.status(404).json({message: 'No existe user con ese id'});
        }

        return res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        return res.status(500).json();
    }
}


module.exports = { addUser, selectUser, updateUser};