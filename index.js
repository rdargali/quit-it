const express = require("express");
const app = express();
const session = require("express-session");

const mustacheExpress = require("mustache-express");
app.use(express.static("public"));

const PORT = process.env.PORT || 8080;

// configure view engine
app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

// app.get("/", (req, res) => {
//   res.render("landing");
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
