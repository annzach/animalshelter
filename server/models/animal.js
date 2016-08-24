const mongoose = require('mongoose');
const animalSchema = new mongoose.Schema({
  name :{type:String, required:true},
  type: {type:String, required:true}, // 'cat','mongoose'
  age: {type:Number,required:true, min:0},
  owner:{type:mongoose.Schema.Types.ObjectId, ref: 'Person'}


  //owner:{type:mongoose.Schema.Types.ObjectId}

  /*{

    name:{type:String, required:true},
    email:{type:String}
  }*/

});
const Animal = mongoose.model('Animal',animalSchema);

module.exports =Animal