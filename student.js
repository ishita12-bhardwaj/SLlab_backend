//import mongoose from 'mongoose';
const mongoose=require("mongoose")
  const { Schema } = mongoose;

  const studentschema = new Schema({
    name:  String, // String is shorthand for {type: String}
    reg_no: Number,
    marks:   Number,

    
  });
  module.exports=mongoose.model("mystudent",studentschema,"SL-LAB-student")