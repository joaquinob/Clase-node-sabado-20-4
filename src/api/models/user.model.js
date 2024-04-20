const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {type: String, require:true},
    surname: {type: String},
    age:  {type: Number},
    pet: [ {type: Schema.ObjectId, ref: 'pet'} ],
    chip: {type: Boolean}
},
{
    collection: 'user'
}

);

const User = mongoose.model('user', userSchema);

module.exports = User