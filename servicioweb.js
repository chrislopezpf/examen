const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
res.send("Bienvenido");
});

app.listen(port, function () {
console.log(`Puerto ${port}!`);
});

var Connection = require('tedious').Connection;  
    var config = {  
        server: 'DESKTOP-8RFCERL\SQLEXPRESS',  
        authentication: {
            type: 'default',
            options: {
                userName: 'chrislopez', 
                password: 'chris123'  
            }
        },
        options: {
            
            encrypt: true,
            database: 'examen'  
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {

        console.log("Ingreso");  
    });
    
    connection.connect();
