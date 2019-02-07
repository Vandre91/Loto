const express = require('express');
const bodyParser = require('body-parser');
const utils = require('./config/utils');
const app = express();
const port = utils.port;
const publicRoot = './dist';
const mongo = require('./config/database');
const conect = new mongo();
const grid = require("./router/grid");


app.use(bodyParser.json())
//app.use(express.static(publicRoot))

app.get("/", (req, res, next) => {  
    //res.sendFile("index.html", { root: publicRoot })
    res.send('index');
})

app.use("/grid", grid);

app.listen(port);
console.log("Listen on Port "+port)