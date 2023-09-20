const express = require("express")
const cors = require("cors")
const app = express()
const Users=require("./models/Login")
app.post("/sim", async (req , res)=>{
    console.log("Criando user")
    const NovoUser = await Users.create(req.body);
    res.status(201).json({message:"criado!", Users:NovoUser})
})

const rotas = require("./routes/Router")
app.use("/api" , rotas);
app.use(cors())

app.use(express.json())

const conn = require("./db/conn");

conn();

app.listen(3001, () => console.log("servidor ativo"))