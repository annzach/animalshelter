const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name :{type:String, required:true},
  email:{type:String}
  //animals:[{type:mongoose.Schema.Types.ObjectId, ref: 'Animal'}]

});

const Person = mongoose.model('Person',personSchema);

module.exports =Person