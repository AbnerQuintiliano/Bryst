const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect('mongodb+srv://Abner:EBR105@cluster0.8kyhqj1.mongodb.net/TCC?retryWrites=true&w=majority&appName=AtlasApp')
        console.log("conexão feita com mongo")
    } catch (error) {
        console.error("conexão não realizada");
        console.log(error)
    }
}

module.exports = main;