const express = require("express");
const app = express();
const path = require('path');

app.use(express.static('public'));

const rutaHome = require("./routers/main");

app.get('/', rutaHome);




app.listen(3000, ()=>{
    console.log("Servidor Funcionando");
});
