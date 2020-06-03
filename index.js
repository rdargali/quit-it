const express = requre("express");
const app = express();
const session = require("express-session");

const mustacheExpress = require("mustache-express");
app.use(express.static("public"));

const PORT = process.env.PORT || 8080;
