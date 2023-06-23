const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require('./db');

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
}

app.use(corsOptions);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.on('error', console.error.bind(console, 'Mongodb connection error:'))

// ! 48:53