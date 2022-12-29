
const mongoose =require ("mongoose");
const AdminSchema = new mongoose.schema({
    email:{
        type:String,
        requiren :true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
     type:Boolean
    }

})
module.exports = mongoose.model("admin",AdminSchema);