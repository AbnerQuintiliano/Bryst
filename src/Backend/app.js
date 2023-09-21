const express = require("express")
const cors = require("cors")
const conn = require("./db/conn");
const app = express()

app.use(express.json()); //não mudar isso de lugar pelo amor de Deus
app.use(cors())
conn();

const rotas = require("./routes/Router")
app.use("/api" , rotas);

app.listen(3001, () => console.log("servidor ativo"))