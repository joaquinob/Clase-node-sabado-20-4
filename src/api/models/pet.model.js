const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema ({
    name: {type: String, require:true},
    race: {type: String},
    age:  {type: Number},
    owner: {type: String},
    chip: {type: Boolean}
},
{
    collection: 'pet'
}

);
const Pet = mongoose.model('pet', petSchema);

module.exports = Pet