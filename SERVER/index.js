const express = require("express");
const app = express();
const porta = 3010
const mysql = require("mysql");
const cors = require('cors')

app.use(express.json());
app.use(cors());


const conection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "login_data",
    password: '',
});


// query
function select(){
    return "Select * from alunos"
}

app.get('/', function(req, res){
    conection.query(select(), function(err, result){
        if (err) throw err
        res.status(200).json(result)
    })
})


app.listen(porta, () => {
    console.log('Servidor em operação')
});