
/*Importando o framework Express*/
const  express = require('express');
const  mysql = require('mysql');
const cors = require('cors'); 


//Criando a instancia da aplicação express
const app = express()
app.use(cors()) //Configura a aplicação para usar o middleware CORS, permitindo acessos de diferentes origens.

//Estabelece uma conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'crud'
})


app.get('/' , (re , res) => {
    return res.json("From Backend Side");
})


app.get('/users' , (req, res)=> {
    const sql = "SELECT * FROM  exemplocurso";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})


//Inicia o servidor na porta 8081.
app.listen(8081 , () => {
    console.log("listening");
})