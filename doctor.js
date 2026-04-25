const mongoose =require('mongoose')

const doctorSchema = new mongoose.Schema({
    name:{type:String,required:true, unique:true},
    age: {type:String,required:true,},
    address: {type:String,required:true,},
    salary:{type:String,required:true,},
    hospital:{type:String,required:true,},
    hire_At: {type:Date, default: Date.now()}

})
 const doctor = mongoose.model('doctor', doctorSchema)
 module.exports = doctor
