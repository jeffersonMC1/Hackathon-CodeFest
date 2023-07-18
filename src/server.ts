import express from 'express';
const fs = require('fs/promises');
const data = require('../database.json');
const cors = require("cors")

const PORT = 3333;

const app = express();
app.use(cors())

app.use(express.json());

const port = process.env.PORT || 3333;

let list = data;

app.get('/users', (request: any, response: any) => {
    response.send(data);
});

app.post('/users', (request: any, response: any) => {
    const user = {
        "nome": request.body.nome || "",
        "cpf": request.body.cpf || "",
        "logradouro": request.body.logradouro || "",
        "rg": request.body.rg || "",
        "bairro": request.body.bairro || "",
        "cidade": request.body.cidade || "",
        "ocupacao": request.body.ocupacao || "",
        "id": list.length + 1,
        "telefone": request.body.telefone
    }
    
    list.push(user)
    fs.writeFile('database.json', JSON.stringify(list))
    response.send({id: user.id, telefone: user.telefone}).json()
});

app.listen(port, () => console.log(`listening on port ${PORT}!`));