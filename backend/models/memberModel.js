import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    image:{type:String, required:true},
    position:{type:String, required:true},
    grade:{type:String, required:true},
    phone:{type:String, required:true},
    about:{type:String, required:true},
    age:{type:String, required:true},
    available:{type:Boolean, default:true},
    address:{type:Object, required:true},
    date:{type:Number, required:true}
    // slots_booked: {type:Object,default:{}}

}) //,{minimize:false}

const memberModel = mongoose.model.member || mongoose.model('member', memberSchema)

export default memberModel;