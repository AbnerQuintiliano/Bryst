const mongoose = require("mongoose");

const { Schema } = mongoose;

const LoginSchema = new Schema(
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
    },
    { timestamps:true },{VesionKey:false}
);

const Login = mongoose.model( "usuarios" , LoginSchema );

module.exports = Login;