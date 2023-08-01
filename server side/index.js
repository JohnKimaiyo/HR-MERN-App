const express = require('express')
const app = express()
const port = 5000
const bodypParser = require("body-parser")
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}))
app.get('/', (req, res) => {
  res.send(`Hello World!`)
})

app.listen(port, () => {

    connection.connect(function(err){
        if(err) throw err;
        console.log("Connected")
    })
  console.log(`Example app listening on port ${port}`)
})


// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
  });
  
  // api
  app.get('/api/department',(request,response)=>{
    const query = `SELECT * from dbo.Department
    (DepartmentsName)`;
    connection.querry(querry,function(err,rows,fields){
        if(err){
            response.send('Failed');
        }
        response.send(rows);
    })
  })