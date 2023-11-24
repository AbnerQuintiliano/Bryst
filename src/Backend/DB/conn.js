const mongoose = require('mongoose');

require("dotenv").config();
const usuario = process.env.User_DB;
const senha = process.env.Password_DB;

async function main() {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(`mongodb+srv://${usuario}:${senha}@cluster0.8kyhqj1.mongodb.net/TCC?retryWrites=true&w=majority&appName=AtlasApp`)
        console.log("conexão feita com mongo")
    } catch (error) {
        console.error("conexão não realizada");
        console.log(error)
    }
}

module.exports = main;