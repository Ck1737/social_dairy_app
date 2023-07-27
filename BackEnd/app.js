const express = require("express");
const app = express();
const port = 3001;
const router = require("./router/route");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose
  .connect(
    "mongodb://mongo:TInPKLZZPhi4UrQkPMmi@containers-us-west-202.railway.app:7428",
    { useNewUrlParser: true, useUnifiedTopology: true } // Add MongoDB connection options
  )
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));
  
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get("/", (req, res) => {
  res.send("welcome");
});



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use("/", router);

// Simplified CORS setup
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
