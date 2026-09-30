const express = require("express");       // Import Express
const cors = require("cors");             // use for enabling client request
const app = express();
const cookieParser = require("cookie-parser");   // allows Express to easily read cookies sent by the browser
app.use(cookieParser());

app.use(cors());
app.use(express.json());    //  for parse request(json data) into js Object and store in (req.body)
app.use(express.urlencoded({ extended: true })); // for x-www-form data
module.exports = app;