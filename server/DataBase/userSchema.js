const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const dotenv = require("dotenv")
dotenv.config({path:"../config.env"})


const userSchema = new mongoose.Schema({
        firstname:{
            type:String,
            require:true
        },
        lastname:{
            type:String,
            require:true
        },
        email:{
        type:String,
        require:true
        },
        phone:{
            type:Number,
            require:true
        },
        password:{
            type:String,
            require:true
        }
})

userSchema.pre('save',async function(next){
    console.log("we are in middleware")

    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password , 12)
    }
    next()
})


module.exports = mongoose.model('User',userSchema)