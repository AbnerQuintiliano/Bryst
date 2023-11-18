const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        id:{type: mongoose.Schema.Types.ObjectId},
        user: {
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        userName:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        office:{
            type: String,
            required: true
        }
    },
    { timestamps:true },{VesionKey:false}
);

const User = mongoose.model( "usuarios" , UserSchema );

module.exports = User;